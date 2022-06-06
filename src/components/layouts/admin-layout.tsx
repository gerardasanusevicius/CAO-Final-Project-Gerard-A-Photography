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
        pt: pageTop,
        pl: pageSide,
        pr: pageSide,
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default AdminLayout;
