import React from 'react';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterLink from './footer-link';
import Paragraph from '../paragraph';

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
    }}
  >
    <Paragraph>
      Content of this webpage belongs to Gerardas Anusevicius.
      <br />
      Any illegal distribution may lead to legal prosecution
    </Paragraph>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
    }}
    >
      <FooterLink href="https://www.facebook.com/Geanphotography" target="_blank"><FacebookIcon /></FooterLink>
      <FooterLink href="https://www.instagram.com/gerard.a.photography/" target="_blank"><InstagramIcon /></FooterLink>
      <FooterLink href="https://www.linkedin.com/in/gerardas-anusevičius-783497194/" target="_blank"><LinkedInIcon /></FooterLink>
    </Box>
  </Box>
);

export default Footer;
