import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import { pageSide, pageTop } from '../../helpers/structure-constants';

const AdminLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        mt: pageTop,
        ml: pageSide,
        mr: pageSide,
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default AdminLayout;
