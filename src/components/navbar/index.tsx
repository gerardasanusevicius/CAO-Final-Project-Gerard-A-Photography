import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
} from '@mui/material';
import NavbarLink from './navbar-link';
import { useRootSelector } from '../../store';
import { selectUser } from '../../store/selectors';
import { useRootDispatch } from '../../store/hooks';
import { authLogoutAction } from '../../store/action-creators';

const Navbar: React.FC = () => {
  const adminLoggedIn = useRootSelector(selectUser);
  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
  };

  return (
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
          justifyContent: { xs: 'space-around', lg: 'space-between' },
          mr: '-25px',
        }}
      >
        <Container
          sx={{
            display: { md: 'flex' },
          }}
        >
          <NavbarLink to="/portfolio">Portfolio</NavbarLink>
          <NavbarLink to="/projects">Projects</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/contacts">Contact</NavbarLink>
          { adminLoggedIn
            ? <NavbarLink to="/admin">Admin</NavbarLink> : null}
        </Container>
        { adminLoggedIn
          ? <Button onClick={logout} sx={{ ':hover': { color: 'primary.dark', background: 'none' } }}>Logout</Button> : null}
        <NavbarLink to="/">
          <Box
            component="img"
            src="./logo.png"
            sx={{
              width: '275px',
            }}
          />

        </NavbarLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
