import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import Project from './page/Project';
import Task from './page/Task';

const RouterConfig = ({ isAuthenticated }) => {
  return (
    <Routes>
      {/* Definimos la ruta principal */}
      <Route path="/" element={<AuthRouter isAuthenticated={isAuthenticated}><Project /></AuthRouter>}>
        {/* Ruta hija de 'Project' */}
        <Route path="home" element={<Task />} />
      </Route>
    </Routes>
  );
}

export default RouterConfig;
