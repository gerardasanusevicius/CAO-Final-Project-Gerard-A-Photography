import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import { pageTop } from '../../helpers/constants';

const AdminLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        mt: pageTop,
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default AdminLayout;
