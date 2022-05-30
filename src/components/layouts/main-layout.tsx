import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import Footer, { barHeight } from '../footer';

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        mt: '137.5px',
        mb: barHeight,
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default MainLayout;
