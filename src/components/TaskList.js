import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, setTaskToEdit }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </ul>
  );
};

export default TaskList;
