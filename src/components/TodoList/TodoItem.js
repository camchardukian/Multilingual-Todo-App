import React from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
const TodoItem = ({
  itemText = "",
  isChecked = false,
  todoId,
  onToggleTodo,
  onRemoveTodo
}) => {
  return (
    <div onClick={() => onToggleTodo(todoId)} className="todo-item-container">
      <div className="todo-item-icon">
        {isChecked ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
      </div>
      <div className="todo-item-text">{itemText}</div>
      <button onClick={e => onRemoveTodo(e, todoId)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TodoItem;
