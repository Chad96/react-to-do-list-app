import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, taskToEdit }) => {
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
