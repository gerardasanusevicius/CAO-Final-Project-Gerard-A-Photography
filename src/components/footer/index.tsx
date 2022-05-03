import React from 'react';
import {
  AppBar,
  Box,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterLink from './footer-link';
import Paragraph from '../paragraph';

const Footer: React.FC = () => (
  <AppBar
    position="static"
    sx={{
      bgcolor: '#f7f7f7',
      border: 0,
      boxShadow: 'none',
      maxWidth: '100%',
      justifyContent: 'space-between',
    }}
  >
    <Paragraph>
      Content of this webpage belongs to Gerardas Anusevicius. Any illegal distribution may lead to legal prosecution
    </Paragraph>
    <Box>
      <FooterLink href="https://www.facebook.com/Geanphotography" target="_blank"><FacebookIcon /></FooterLink>
      <FooterLink href="https://www.instagram.com/gerard.a.photography/" target="_blank"><InstagramIcon /></FooterLink>
      <FooterLink href="https://www.linkedin.com/in/gerardas-anusevičius-783497194/" target="_blank"><LinkedInIcon /></FooterLink>
    </Box>
  </AppBar>
);

export default Footer;
