import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../pages/features/auth/auth-context';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return <Navigate to={`/auth/login?next=${location.pathname}`} />;
  }

  return children;
};

export default RequireAuth;
