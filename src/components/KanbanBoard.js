// src/components/KanbanBoard.js

import React from "react";
import PropTypes from "prop-types";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks, setTaskToEdit, deleteTask }) => {
  if (!tasks || !Array.isArray(tasks)) {
    console.error("Invalid tasks prop:", tasks);
    return <div>Error: Tasks data is not available.</div>;
  }

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="kanban-board">
      <KanbanColumn
        title="To Do"
        tasks={todoTasks}
        setTaskToEdit={setTaskToEdit}
        deleteTask={deleteTask}
      />
      <KanbanColumn
        title="In Progress"
        tasks={inProgressTasks}
        setTaskToEdit={setTaskToEdit}
        deleteTask={deleteTask}
      />
      <KanbanColumn
        title="Done"
        tasks={doneTasks}
        setTaskToEdit={setTaskToEdit}
        deleteTask={deleteTask}
      />
    </div>
  );
};

KanbanBoard.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTaskToEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

KanbanBoard.defaultProps = {
  tasks: [],
};

export default KanbanBoard;
