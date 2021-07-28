import React, { useState } from "react";
import TodoList from "../../components/TodoList";
import "./styles.scss";
const TodoListPage = () => {
  const handleCreateNewTodo = () => {
    setTodoItems(() => [...todoItems, newTodoItemContent]);
    setNewTodoItemContent("");
  };

  const handleTodoContentChange = e => {
    setNewTodoItemContent(e.target.value);
  };

  const [todoItems, setTodoItems] = useState([]);
  const [newTodoItemContent, setNewTodoItemContent] = useState("");
  return (
    <div className="todo-list-page-container">
      <div className="todo-list-page-title">Todo List</div>
      <div className="todo-control-container">
        <input
          type="text"
          value={newTodoItemContent}
          onChange={handleTodoContentChange}
        ></input>
        <button onClick={handleCreateNewTodo}>Add Todo</button>
      </div>
      <TodoList todoItems={todoItems} />
    </div>
  );
};

export default TodoListPage;
