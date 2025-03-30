import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const AuthRouter = ({ isAuthenticated }) => {
  
  if (!isAuthenticated) {
    return <Navigate to={"/"}/>;
  } else {
    return <Outlet/>;
  }
};

export default AuthRouter;
