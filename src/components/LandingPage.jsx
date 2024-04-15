// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <header>
        <h1>Welcome to Task Planner</h1>
        <p>Start planning your tasks efficiently!</p>
      </header>
      <main>
        <div className="welcome-container">
          <Link className="get-started-button" to="/home">
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
