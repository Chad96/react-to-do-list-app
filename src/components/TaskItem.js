import React from "react";

const TaskItem = ({ task, deleteTask, setTaskToEdit }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => setTaskToEdit(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
