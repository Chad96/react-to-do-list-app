import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import UserDetails from "./components/UserDetails";
import TaskFilters from "./components/TaskFilters";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import "./App.css";
import { getTasksFromStorage, saveTasksToStorage } from "./utils/localStorage";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const [filter, setFilter] = useState({
    status: "",
    priority: "",
    dueDate: "",
  });
  const [showTasks, setShowTasks] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = getTasksFromStorage();
    if (storedTasks.length > 0) {
      // Check if there are stored tasks
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]);

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

  const registerUser = (user) => {
    // In a real app, you'd save this to a backend
    setUserDetails(user);
    setIsRegistered(true);
  };

  const loginUser = (user) => {
    // In a real app, you'd verify this with a backend
    if (
      user.email === userDetails.email &&
      user.password === userDetails.password
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid login details");
    }
  };

  if (!isRegistered) {
    return <RegistrationForm registerUser={registerUser} />;
  }

  if (!isLoggedIn) {
    return <LoginForm loginUser={loginUser} />;
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        taskToEdit={taskToEdit}
      />
      <TaskFilters setFilter={setFilter} />
      <button onClick={() => setShowTasks(!showTasks)}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>
      {showTasks && (
        <KanbanBoard
          tasks={filteredTasks}
          setTaskToEdit={setTaskToEdit}
          deleteTask={deleteTask}
        />
      )}
      <UserDetails
        userDetails={userDetails}
        updateUserDetails={updateUserDetails}
      />
    </div>
  );
};

export default App;
