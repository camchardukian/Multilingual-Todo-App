import React from "react";
import TodoItem from "./TodoItem";
import "./styles.scss";
const TodoList = ({ todoItems = [] }) => {
  return (
    <div className="todo-list-container">
      {todoItems.map(todoItemText => {
        return (
          <TodoItem
            key={`${todoItemText}-${Math.random()}`}
            itemText={todoItemText}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
