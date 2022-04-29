import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import Background from './background';

const LandingPage: React.FC = () => (
  <Background>
    <Typography
      component="h1"
      variant="h1"
      sx={(theme) => ({
        textTransform: 'uppercase',
        marginLeft: '820px',
        marginBottom: '160px',
        color: theme.palette.darkColor.main,
        opacity: 0.85,
      })}
    >
      Gerard A. Photography

    </Typography>
    <Button
      href="/portfolio"
      variant="outlined"
      sx={(theme) => ({
        color: theme.palette.lightColor.main,
        marginTop: '200px',
        marginLeft: '1240px',
        fontSize: '36px',
        border: `1.5px solid ${theme.palette.lightColor.main}`,
      })}
    >
      Explore

    </Button>
  </Background>
);

export default LandingPage;
