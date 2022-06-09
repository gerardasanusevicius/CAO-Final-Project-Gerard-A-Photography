import React from 'react';
import { Typography, Button } from '@mui/material';
import Background from './background';
import SocialIcons from '../../components/social-icons';

const LandingPage: React.FC = () => (
  <Background sx={{
    display: 'flex', flexDirection: 'column', alignItems: { xxs: 'center', sm: 'flex-end' }, justifyContent: 'space-between',
  }}
  >
    <Typography
      component="h1"
      variant="h1"
      sx={(theme) => ({
        textTransform: 'uppercase',
        color: theme.palette.primary.dark,
        m: { xxs: '0', sm: '0 3rem 0 0' },
        fontSize: {
          xxs: '2rem', md: '3rem', lg: '5.5rem',
        },
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
        fontSize: { xxs: '0.75', md: '1.5rem' },
        maxWidth: { xxs: '6rem', md: '10rem' },
        height: 'auto',
        border: `0.1rem solid ${theme.palette.primary.light}`,
        borderRadius: 0,
        transition: '0.5s',
        m: { xxs: '0', sm: '0 3rem 0 0' },
        ':hover': {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.primary.light,
        },
      })}
    >
      Explore

    </Button>
    <SocialIcons
      color="primary.light"
      sx={{
        m: { xxs: '0', sm: '0 3rem 2rem 0' },
        // transform: { sm: 'translateX(1rem)' },
      }}
    />
  </Background>
);

export default LandingPage;
