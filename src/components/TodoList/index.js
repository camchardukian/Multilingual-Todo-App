import React from "react";
import TodoItem from "./TodoItem";
import "./styles.scss";
const TodoList = ({ todoItems = [], onToggleTodo }) => {
  return (
    <div className="todo-list-container">
      {todoItems.map(todoItem => {
        const { todoItemText, isChecked, todoId } = todoItem;
        return (
          <TodoItem
            key={todoId}
            todoId={todoId}
            itemText={todoItemText}
            isChecked={isChecked}
            onToggleTodo={todoId => {
              onToggleTodo(todoId);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
