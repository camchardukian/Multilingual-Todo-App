import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../../components/TodoList";
import "./styles.scss";
const TodoListPage = () => {
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

  const [todoItems, setTodoItems] = useState([]);
  const [newTodoItemText, setNewTodoItemText] = useState("");
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
      </div>
      <TodoList
        todoItems={todoItems}
        onToggleTodo={handleToggleTodo}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};

export default TodoListPage;
