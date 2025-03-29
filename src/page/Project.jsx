import React from 'react';
import { Outlet } from 'react-router-dom';

const Project = () => {
  return (
    <div>
      <div>Este es el project</div>
      <Outlet />  {/* Aquí se renderizan las rutas hijas */}
    </div>
  );
};

export default Project;
