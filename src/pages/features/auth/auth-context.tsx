import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crudentials, Admin } from '../../../types';
import useLocalStorage from '../../../hooks/use-local-storage-state';
import AuthService from './auth-service';

export type AuthContextType = {
  user: null | Admin,
  loggedIn: boolean,
  error: string | null,
  clearError: VoidFunction,
  login: (crudentials: Crudentials, next: string) => void,
  logout: () => void,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorage<AuthContextType['loggedIn']>('loggedIn', false);
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const login: AuthContextType['login'] = async (crudentials: Crudentials, next) => {
    if (error) {
      setError(null);
    }
    try {
      const loggedInAdmin = await AuthService.login(crudentials);
      setLoggedIn(true);
      setUser(loggedInAdmin);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    }
  };

  const logout: AuthContextType['logout'] = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn,
    error,
    clearError,
    login,
    logout,
  }), [loggedIn, user, error]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
