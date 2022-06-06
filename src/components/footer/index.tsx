import React from 'react';
import { Box } from '@mui/material';
import Paragraph from '../paragraph';
import SocialIcons from '../social-icons';
import { pageBottom, pageSide } from '../../helpers/structure-constants';

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
      height: pageBottom,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: pageSide,
      paddingRight: pageSide,
      position: 'fixed',
      left: 0,
      bottom: 0,
      right: 0,
      ':hover .sociallink': {
        color: 'primary.main',
      },
    }}
  >
    <Paragraph sx={{
      display: {
        xxs: 'none', md: 'block',
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
