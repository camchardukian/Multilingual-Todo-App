import React from "react";
import TodoItem from "./TodoItem";
import "./styles.scss";
const TodoList = ({
  todoItems = [],
  onToggleTodo,
  onRemoveTodo,
  onDragEnd,
  onDragEnter,
  onDragStart,
  mostRecentDraggedOnItems
}) => {
  return (
    <div className="todo-list-container">
      {todoItems.map(todoItem => {
        const { todoItemText, isChecked, todoId } = todoItem;
        return (
          <TodoItem
            key={todoId}
            mostRecentDraggedOnItems={mostRecentDraggedOnItems}
            todoId={todoId}
            itemText={todoItemText}
            isChecked={isChecked}
            onToggleTodo={todoId => {
              onToggleTodo(todoId);
            }}
            onRemoveTodo={(e, todoId) => {
              onRemoveTodo(e, todoId);
            }}
            onDragStart={(e, todoId) => onDragStart(e, todoId)}
            onDragEnd={e => onDragEnd(e)}
            onDragEnter={todoId => onDragEnter(todoId)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
