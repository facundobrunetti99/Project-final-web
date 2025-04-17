import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRouter = () => {
  const token = localStorage.getItem('token'); // Obtener el token de localStorage

  // Si no hay token, redirigir al login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Si hay token, permitir el acceso a las rutas protegidas
};

export default AuthRouter;
