import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRootSelector } from '../store/hooks';
import { selectLoggedIn } from '../store/selectors';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const loggedIn = useRootSelector(selectLoggedIn);

  if (!loggedIn) {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }

  return children;
};

export default RequireAuth;
