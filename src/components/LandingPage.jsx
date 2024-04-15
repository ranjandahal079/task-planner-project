import React from "react";

function LandingPage({ onGetStarted }) {
  const handleGetStarted = () => {
    onGetStarted();
  };

  return (
    <div>
      <header>
        <h1>Welcome to Task Planner</h1>
        <p>Start planning your tasks efficiently!</p>
      </header>
      <main>
        <div className="welcome-container">
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
