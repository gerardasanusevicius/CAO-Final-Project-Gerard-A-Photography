import React, { useContext } from 'react';
import {
  AppBar,
  Button, Container, TextField, Toolbar, Typography,
} from '@mui/material';
import AuthContext from '../../features/auth/auth-context';

const AdminPage: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#f7f7f7',
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
      <Container sx={{
        marginTop: '100px', width: '250px', display: 'flex', flexDirection: 'column',
      }}
      >
        <TextField
          id="title"
          label="Title"
          name="title"
          type="text"
          sx={{ marginBottom: '25px' }}
        />
        <TextField
          id="url"
          label="Url"
          name="url"
          type="url"
          sx={{ marginBottom: '25px' }}
        />
        <Button type="submit">Upload</Button>
      </Container>
    </>
  );
};

export default AdminPage;
