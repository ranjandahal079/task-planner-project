// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <header className="landing-header">
        <h1>Welcome to Task Planner</h1>
        <p>Start planning your tasks efficiently!</p>
      </header>
      <main className="landing-main">
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
