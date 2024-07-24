import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TaskForm from "./components/TaskForm";
import KanbanBoard from "./components/KanbanBoard";
import UserDetails from "./components/UserDetails";
import TaskFilters from "./components/TaskFilters";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import ProfileForm from "./components/ProfileForm";
import "./App.css";
import { getTasksFromStorage, saveTasksToStorage } from "./utils/localStorage";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });
  const [filter, setFilter] = useState({
    status: "",
    priority: "",
    dueDate: "",
  });
  const [showTasks, setShowTasks] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedTasks = getTasksFromStorage();
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

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
    setUserDetails(user);
    setIsRegistered(true);
  };

  const loginUser = (user) => {
    if (
      user.email === userDetails.email &&
      user.password === userDetails.password
    ) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid login details");
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/register"
            element={
              !isRegistered ? (
                <ProfileForm registerUser={registerUser} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <LoginForm loginUser={loginUser} />
              ) : (
                <Navigate to="/tasks" />
              )
            }
          />
          <Route
            path="/tasks"
            element={
              isLoggedIn ? (
                <>
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
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/" element={<Navigate to="/register" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
