import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../../components/TodoList";
import Helpers from "../../utils/helpers";
import "./styles.scss";

const TodoListPage = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoItemText, setNewTodoItemText] = useState("");
  const [hasUncheckedItems, setHasUncheckedItems] = useState(false);
  const [mostRecentDraggedOnItems, setMostRecentDraggedOnItems] = useState([]);
  const [todoItemToBeMoved, setTodoItemToBeMoved] = useState({});

  useEffect(() => {
    setHasUncheckedItems(
      todoItems.some(item => {
        return item.isChecked === false;
      })
    );
  }, [todoItems]);
  const handleCreateNewTodo = () => {
    const todoId = uuidv4();
    setTodoItems(() => [
      ...todoItems,
      { todoItemText: newTodoItemText, isChecked: false, todoId }
    ]);
    setNewTodoItemText("");
  };

  const handleTodoContentChange = e => {
    setNewTodoItemText(e.target.value);
  };

  const handleToggleTodo = todoId => {
    setTodoItems(todoItems => {
      return todoItems.map(todoItem => {
        if (todoItem.todoId === todoId) {
          return {
            ...todoItem,
            isChecked: !todoItem.isChecked
          };
        }
        return todoItem;
      });
    });
  };

  const handleRemoveTodo = (e, todoId) => {
    e.stopPropagation();
    setTodoItems(todoItems => {
      return todoItems.filter(todoItem => {
        if (todoItem.todoId !== todoId) {
          return todoItem;
        }
        return false;
      });
    });
  };

  const handleToggleAll = () => {
    setTodoItems(todoItems => {
      return todoItems.map(todoItem => {
        return {
          ...todoItem,
          isChecked: hasUncheckedItems
        };
      });
    });
  };

  const handleDragStart = (e, todoId) => {
    handleSetTodoItemToBeMoved(todoId);
    setTimeout(() => {
      e.target.style.display = "none";
    });
  };

  const handleDragEnd = e => {
    setTodoItems(() => {
      const todoItemsArrangement = todoItems.filter(item => {
        if (item.todoId !== todoItemToBeMoved.todoId) {
          return item;
        }
        return false;
      });
      const indexToInsertMovedTodo = Helpers.generateTodoInsertionIndex({
        todoListWithoutItemToBeMoved: todoItemsArrangement,
        mostRecentDraggedOnItems
      });
      todoItemsArrangement.splice(indexToInsertMovedTodo, 0, todoItemToBeMoved);
      return todoItemsArrangement;
    });
    e.target.style.display = "flex";
    setMostRecentDraggedOnItems([]);
    setTodoItemToBeMoved("");
  };

  const handleDragEnter = todoId => {
    setMostRecentDraggedOnItems(prevState => {
      if (prevState.length > 0) {
        const previousItem = prevState[prevState.length - 1];
        return [previousItem, todoId];
      }
      return [...prevState, todoId];
    });
  };

  const handleSetTodoItemToBeMoved = todoId => {
    setTodoItemToBeMoved(() => {
      return todoItems.filter(item => {
        if (item.todoId === todoId) {
          return item;
        }
        return false;
      })[0];
    });
  };

  return (
    <div className="todo-list-page-container">
      <div className="todo-list-page-title">Todo List</div>
      <div className="todo-control-container">
        <input
          type="text"
          value={newTodoItemText}
          onChange={handleTodoContentChange}
        ></input>
        <button onClick={handleCreateNewTodo}>Add Todo</button>
        {todoItems.length > 0 && (
          <button onClick={handleToggleAll}>
            {hasUncheckedItems ? "Toggle All Checked" : "Toggle All Unchecked"}
          </button>
        )}
      </div>
      <div></div>
      <TodoList
        todoItems={todoItems}
        onToggleTodo={handleToggleTodo}
        onRemoveTodo={handleRemoveTodo}
        onDragStart={handleDragStart}
        onDragEnd={e => {
          handleDragEnd(e);
        }}
        onDragEnter={handleDragEnter}
        mostRecentDraggedOnItems={mostRecentDraggedOnItems}
      />
    </div>
  );
};

export default TodoListPage;
