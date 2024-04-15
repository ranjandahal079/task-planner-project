import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import HomePage from "./pages/HomePage";
import AddEditPage from "./pages/AddEditPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/add-task" exact component={AddEditPage} />
            <Route path="/edit-task/:taskId" component={AddEditPage} /> {/* Route for editing tasks */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
