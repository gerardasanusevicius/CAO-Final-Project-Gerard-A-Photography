import React from 'react';
import { Box } from '@mui/material';
import Paragraph from '../paragraph';
import SocialIcons from '../social-icons';

export const barHeight = '65px';

const Footer: React.FC = () => (
  <Box
    sx={{
      bgcolor: '#f7f7f7',
      border: 0,
      boxShadow: 'none',
      maxWidth: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    <Paragraph>
      Content of this webpage belongs to Gerardas Anusevicius.
      <br />
      Any illegal distribution may lead to legal prosecution
    </Paragraph>
    <SocialIcons color="primary.dark" />
  </Box>
);

export default Footer;
