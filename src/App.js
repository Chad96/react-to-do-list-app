import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    task.id = new Date().getTime();
    setTasks((prevTasks) => ({
      ...prevTasks,
      todo: [...prevTasks.todo, task],
    }));
  };

  const moveTask = (id, from, to) => {
    const taskToMove = tasks[from].find((task) => task.id === id);
    setTasks((prevTasks) => ({
      ...prevTasks,
      [from]: prevTasks[from].filter((task) => task.id !== id),
      [to]: [...prevTasks[to], taskToMove],
    }));
  };

  const deleteTask = (id, column) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: prevTasks[column].filter((task) => task.id !== id),
    }));
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <TaskForm
        addTask={addTask}
        editTask={setTaskToEdit}
        taskToEdit={taskToEdit}
      />
      <KanbanBoard tasks={tasks} moveTask={moveTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
