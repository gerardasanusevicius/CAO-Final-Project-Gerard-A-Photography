import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';

const AdminLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        mt: '137.5px',
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default AdminLayout;
