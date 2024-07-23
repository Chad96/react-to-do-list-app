// src/components/RegistrationForm.js

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const RegistrationForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here, e.g., save user details to localStorage
    login({ email }); // Set the user in context on successful registration
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
