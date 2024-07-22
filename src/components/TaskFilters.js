import React, { useState } from "react";

const TaskFilters = ({ setFilter }) => {
  const [filter, setLocalFilter] = useState({
    status: "",
    priority: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(filter);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="status" value={filter.status} onChange={handleChange}>
        <option value="">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select name="priority" value={filter.priority} onChange={handleChange}>
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={filter.dueDate}
        onChange={handleChange}
      />
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default TaskFilters;
