import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// @TODO in the next PR use conditional rendering when the user toggles the todo item state.

const TodoItem = ({ itemText = "" }) => {
  return (
    <div className="todo-item-container">
      <div className="todo-item-icon">
        <RadioButtonUncheckedIcon />
      </div>
      <div className="todo-item-text">{itemText}</div>
    </div>
  );
};

export default TodoItem;
