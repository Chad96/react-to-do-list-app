import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import UserDetails from "./components/UserDetails";
import TaskFilters from "./components/TaskFilters";
import "./App.css";
import {
  getTasksFromStorage,
  saveTasksToStorage,
  getUserDetailsFromStorage,
  saveUserDetailsToStorage,
} from "./utils/localStorage";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const [filter, setFilter] = useState({
    status: "",
    priority: "",
    dueDate: "",
  });

  useEffect(() => {
    const storedTasks = getTasksFromStorage();
    const storedUserDetails = getUserDetailsFromStorage();
    setTasks(storedTasks);
    setUserDetails(storedUserDetails);
  }, []);

  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

  useEffect(() => {
    saveUserDetailsToStorage(userDetails);
  }, [userDetails]);

  const addTask = (task) => {
    task.id = new Date().getTime();
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateUserDetails = (details) => {
    setUserDetails(details);
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (filter.status ? task.status === filter.status : true) &&
      (filter.priority ? task.priority === filter.priority : true) &&
      (filter.dueDate ? task.dueDate === filter.dueDate : true)
    );
  });

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        taskToEdit={taskToEdit}
      />
      <TaskFilters setFilter={setFilter} />
      <KanbanBoard
        tasks={filteredTasks}
        setTaskToEdit={setTaskToEdit}
        deleteTask={deleteTask}
      />
      <UserDetails
        userDetails={userDetails}
        updateUserDetails={updateUserDetails}
      />
    </div>
  );
};

export default App;
