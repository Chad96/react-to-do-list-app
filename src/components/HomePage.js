// src/components/HomePage.js

import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>Task Manager</h1>
      {!isAuthenticated() ? (
        <div>
          {!showLogin ? <RegistrationForm /> : <LoginForm />}
          <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? "Register" : "Login"}
          </button>
        </div>
      ) : (
        <p>
          You're already logged in. You can access the Kanban board from the
          menu.
        </p>
      )}
    </div>
  );
};

export default HomePage;
