import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <Box component="main">
      <Outlet />
    </Box>
  </>
);

export default MainLayout;
