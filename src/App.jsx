import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  const handleGetStarted = () => {
    setStarted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        {!started ? (
          <LandingPage onGetStarted={handleGetStarted} />
        ) : (
          <TaskList />
        )}
      </div>
    </div>
  );
}

export default App;
