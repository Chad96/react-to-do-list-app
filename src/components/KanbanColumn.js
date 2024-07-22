import React from "react";
import TaskItem from "./TaskItem";

const KanbanColumn = ({ title, tasks, setTaskToEdit, deleteTask }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setTaskToEdit={setTaskToEdit}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default KanbanColumn;
