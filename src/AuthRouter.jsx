import React from 'react';
import PublicHome from './page/PublicHome';

const AuthRouter = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <PublicHome />;
  } else {
    return <>{children}</>;
  }
};

export default AuthRouter;
