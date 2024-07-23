// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file if you have one

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/kanban">Task Manager</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
