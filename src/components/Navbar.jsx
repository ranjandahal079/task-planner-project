import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar-brand">Machnet Task Planner Project</span>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li className="dropdown">
            <a href="#services">Others</a>
            <div className="dropdown-content">
              <a href="#service1">Other 1</a>
              <a href="#service2">Other 2</a>
              <a href="#service3">Other 3</a>
            </div>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
