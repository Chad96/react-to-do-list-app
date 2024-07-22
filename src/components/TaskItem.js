import React from "react";

const TaskItem = ({ task, onMoveLeft, onMoveRight, onDelete }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <button onClick={onMoveLeft}>&lt;</button>
        <button onClick={onMoveRight}>&gt;</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
