import React from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Box,
} from '@mui/material';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => (
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
        <NavbarLink to="/portfolio">Portfolio</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/contacts">Contacts</NavbarLink>
      </Container>
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

export default Navbar;
