import React from "react";
import Navbar from "./components/Navbar"; // Importing the Navbar component
import "./App.css";

function App() {
  return (
    <div>
      <Navbar /> {/* Using the Navbar component */}
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
