import React from "react";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks, setTaskToEdit, deleteTask }) => {
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

export default KanbanBoard;
