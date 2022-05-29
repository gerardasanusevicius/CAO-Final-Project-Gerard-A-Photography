import React from 'react';
import { Box } from '@mui/material';
import Paragraph from '../paragraph';
import SocialIcons from '../social-icons';

export const barHeight = '65px';

const Footer: React.FC = () => (
  <Box
    sx={{
      bgcolor: 'primary.light',
      border: 0,
      boxShadow: 'none',
      maxWidth: '100%',
      flexDirection: 'row',
      justifyContent: {
        xs: 'center', md: 'space-between',
      },
      height: barHeight,
      display: 'flex',
      alignItems: 'center',
      padding: '0px 62.5px 0px 80px',
      position: 'fixed',
      left: '0px',
      bottom: '0px',
      right: '0px',
      ':hover .sociallink': {
        color: 'primary.main',
      },
    }}
  >
    <Paragraph sx={{
      display: {
        xs: 'none', md: 'block',
      },
    }}
    >
      Content of this webpage belongs to Gerardas Anusevicius.
      <br />
      Any illegal distribution may lead to legal prosecution
    </Paragraph>
    <SocialIcons color="primary.dark" />
  </Box>
);

export default Footer;
