import React from "react";
import RouterConfig from "../src/RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/App.css";

const App = () => {
  const isAuthenticated = false;
  return (
    <Router>
      <RouterConfig isAuthenticated={isAuthenticated}></RouterConfig>
    </Router>
  );
};

export default App;
