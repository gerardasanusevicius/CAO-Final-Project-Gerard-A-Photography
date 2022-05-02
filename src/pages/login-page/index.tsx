import React, {
  useState, useContext,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { TextField } from '@mui/material';

import AuthContext from '../features/auth/auth-context';
import AuthForm from './auth-form';

const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const nextPage = searchParams.get('next') ?? '/';
    login(nextPage);
  };

  return (
    <AuthForm
      formTitle="Authorization"
      submitText="Login"
      onSubmit={handleSubmit}
    >
      <TextField
        type="username"
        label="Username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthForm>
  );
};

export default LoginPage;
