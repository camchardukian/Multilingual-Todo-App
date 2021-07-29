import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const TodoItem = ({
  itemText = "",
  isChecked = false,
  todoId,
  onToggleTodo
}) => {
  return (
    <button
      onClick={() => onToggleTodo(todoId)}
      className="todo-item-container"
    >
      <div className="todo-item-icon">
        {isChecked ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
      </div>
      <div className="todo-item-text">{itemText}</div>
    </button>
  );
};

export default TodoItem;
