// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar-brand">Machnet Task Planner Project</span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <a>Task</a>
          </li>
          <li className="dropdown">
            <a href="#others">Others</a>
            <div className="dropdown-content">
              <a href="#service1">Other 1</a>
              <a href="#service2">Other 2</a>
              <a href="#service3">Other 3</a>
            </div>
          </li>
          {/* Add other links as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
