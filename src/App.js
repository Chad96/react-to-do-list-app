// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = React.useState([]); // Initialize tasks as an empty array

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/kanban"
            element={
              <PrivateRoute>
                <KanbanBoard
                  tasks={tasks} // Ensure tasks is passed here
                  setTaskToEdit={() => {}} // Example callback
                  deleteTask={() => {}} // Example callback
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
