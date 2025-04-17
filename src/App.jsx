import React, { useState, useEffect } from "react";
import RouterConfig from "../src/RouterConfig";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar si hay un token almacenado en el localStorage al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <RouterConfig isAuthenticated={isAuthenticated}></RouterConfig>
    </Router>
  );
};

export default App;
