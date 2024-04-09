// src/App.js
import React from "react";

import "./App.css";

function App() {
  return (
    <div>
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
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Task Planner</h1>
          <p>Start planning your tasks efficiently!</p>
        </header>
        <main>
          {/* Task Planner Components will go here */}
          <div className="welcome-container">
            <h2>Get Started</h2>
            <button className="get-started-button">Get Started</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
