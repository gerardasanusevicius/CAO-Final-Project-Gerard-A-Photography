import React from 'react';
import { Typography, Button } from '@mui/material';
import Background from './background';
import SocialIcons from '../../components/social-icons';

const LandingPage: React.FC = () => (
  <Background>
    <Typography
      component="h1"
      variant="h1"
      sx={(theme) => ({
        textTransform: 'uppercase',
        position: 'absolute',
        left: '820px',
        color: theme.palette.primary.dark,
      })}
    >
      Gerard A. Photography

    </Typography>
    <Button
      href="/portfolio"
      variant="outlined"
      sx={(theme) => ({
        color: theme.palette.primary.light,
        overflow: 'hidden',
        position: 'absolute',
        bottom: '55px',
        right: '155px',
        fontSize: '24px',
        border: `1.5px solid ${theme.palette.primary.light}`,
        borderRadius: '0px',
        transition: '0.5s',
        ':hover': {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
        },
      })}
    >
      Explore

    </Button>
    <SocialIcons position="absolute" left="1320px" top="28px" color="primary.light" />
  </Background>
);

export default LandingPage;
