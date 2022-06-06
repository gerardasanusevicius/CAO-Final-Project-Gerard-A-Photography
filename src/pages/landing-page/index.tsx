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
        right: '3rem',
        color: theme.palette.primary.dark,
      })}

    >
      Gerard A.
      <br />
      Photography

    </Typography>
    <Button
      href="/portfolio"
      variant="outlined"
      sx={(theme) => ({
        color: theme.palette.primary.light,
        overflow: 'hidden',
        position: 'absolute',
        bottom: '10rem',
        right: '3rem',
        fontSize: '1.5rem',
        border: `0.1rem solid ${theme.palette.primary.light}`,
        borderRadius: 0,
        transition: '0.5s',
        ':hover': {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
        },
      })}
    >
      Explore

    </Button>
    <SocialIcons position="absolute" right="2rem" top="1rem" color="primary.light" />
  </Background>
);

export default LandingPage;
