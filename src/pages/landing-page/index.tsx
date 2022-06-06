import React from 'react';
import { Typography, Button } from '@mui/material';
import Background from './background';
import SocialIcons from '../../components/social-icons';
import { pageSide } from '../../helpers/structure-constants';

const LandingPage: React.FC = () => (
  <Background>
    <SocialIcons position="absolute" right={pageSide} top="1rem" color="primary.light" />
    <Typography
      component="h1"
      variant="h1"
      sx={(theme) => ({
        textTransform: 'uppercase',
        position: 'absolute',
        right: pageSide,
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
        right: pageSide,
        fontSize: '1.5rem',
        border: `0.1rem solid ${theme.palette.primary.light}`,
        borderRadius: 0,
        transition: '0.5s',
        m: 0,
        ':hover': {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
        },
      })}
    >
      Explore

    </Button>
  </Background>
);

export default LandingPage;
