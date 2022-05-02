import React, { useContext } from 'react';
import { Button } from '@mui/material';
import AuthContext from '../features/auth/auth-context';

const AdminPage: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <div>This is a temporarily empty AdminPage</div>
      <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default AdminPage;
