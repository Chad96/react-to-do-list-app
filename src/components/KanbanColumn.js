import React from "react";
import TaskItem from "./TaskItem";

const KanbanColumn = ({ title, tasks, moveTask, deleteTask, column }) => {
  const handleMove = (id, direction) => {
    const columns = ["todo", "inProgress", "done"];
    const currentIndex = columns.indexOf(column);
    const targetIndex = currentIndex + direction;
    if (targetIndex >= 0 && targetIndex < columns.length) {
      moveTask(id, column, columns[targetIndex]);
    }
  };

  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onMoveLeft={() => handleMove(task.id, -1)}
          onMoveRight={() => handleMove(task.id, 1)}
          onDelete={() => deleteTask(task.id, column)}
        />
      ))}
    </div>
  );
};

export default KanbanColumn;
