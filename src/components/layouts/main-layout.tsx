import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import { pageBottom, pageSide, pageTop } from '../../helpers/structure-constants';

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        mt: pageTop,
        mb: pageBottom,
        ml: pageSide,
        mr: pageSide,
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default MainLayout;
