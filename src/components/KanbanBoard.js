import React from "react";
import KanbanColumn from "./KanbanColumn";

const KanbanBoard = ({ tasks, moveTask, deleteTask }) => {
  return (
    <div className="kanban-board">
      <KanbanColumn
        title="To Do"
        tasks={tasks.todo}
        moveTask={moveTask}
        deleteTask={deleteTask}
        column="todo"
      />
      <KanbanColumn
        title="In Progress"
        tasks={tasks.inProgress}
        moveTask={moveTask}
        deleteTask={deleteTask}
        column="inProgress"
      />
      <KanbanColumn
        title="Done"
        tasks={tasks.done}
        moveTask={moveTask}
        deleteTask={deleteTask}
        column="done"
      />
    </div>
  );
};

export default KanbanBoard;
