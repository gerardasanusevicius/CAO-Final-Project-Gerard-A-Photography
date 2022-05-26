import React from 'react';
import {
  AppBar,
  Button, Container, Toolbar,
} from '@mui/material';

import { useRootSelector } from '../../store';
import { selectUser } from '../../store/selectors';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch } from '../../store/hooks';
import UploadForm from './upload-form';

const AdminPage: React.FC = () => {
  const user = useRootSelector(selectUser);
  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'primary.light',
          border: 0,
          boxShadow: 'none',
          maxWidth: '100%',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mr: '-25px',
          }}
        >
          <Container
            sx={{
              display: 'flex',
            }}
          >
            <Button onClick={logout}>Logout</Button>
          </Container>
        </Toolbar>
      </AppBar>
      <UploadForm />
    </>
  );
};

export default AdminPage;
