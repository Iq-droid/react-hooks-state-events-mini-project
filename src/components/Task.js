import React from "react";

function Task({ task, onDeleteTask }) {
  const { text, category } = task;

  const handleDeleteClick = () => {
    onDeleteTask(text);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
