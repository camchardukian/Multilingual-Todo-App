import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem = ({
  itemText = "",
  isChecked = false,
  todoId,
  onToggleTodo,
  onRemoveTodo,
  onDragStart,
  onDragEnd,
  onDragEnter,
  mostRecentDraggedOnItems
}) => {
  return (
    <div className="todo-item-outer-drop-container">
      <div className="todo-item-container">
        <div
          onClick={() => onToggleTodo(todoId)}
          draggable
          onDragStart={e => onDragStart(e, todoId)}
          onDragEnter={() => onDragEnter(todoId)}
          onDragEnd={e => onDragEnd(e)}
          className={`todo-item-content ${mostRecentDraggedOnItems.includes(
            todoId
          ) && "highlight"}`}
        >
          <div className="todo-item-icon">
            {isChecked ? (
              <CheckCircleOutlineIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </div>
          <div className="todo-item-text">{itemText}</div>
          <button onClick={e => onRemoveTodo(e, todoId)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
