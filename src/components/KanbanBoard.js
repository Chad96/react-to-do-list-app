import React from "react";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks, setTaskToEdit, deleteTask }) => {
  const columns = {
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done",
  };

  return (
    <div className="kanban-board">
      {Object.keys(columns).map((columnKey) => (
        <KanbanColumn
          key={columnKey}
          title={columns[columnKey]}
          tasks={tasks.filter((task) => task.status === columnKey)}
          setTaskToEdit={setTaskToEdit}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
