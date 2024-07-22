import React from "react";

const TaskItem = ({ task, setTaskToEdit, deleteTask }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "todo":
        return "task-todo";
      case "inProgress":
        return "task-in-progress";
      case "done":
        return "task-done";
      default:
        return "";
    }
  };

  return (
    <div className={`task-item ${getStatusClass(task.status)}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <div className="task-actions">
        <button onClick={() => setTaskToEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
