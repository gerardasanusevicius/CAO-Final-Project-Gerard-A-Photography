import React from 'react';
import {
  Container,
  Typography,
  Box,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterLink from './footer-link';

const Footer: React.FC = () => (
  <Container>
    <Typography sx={({ theme }) => ({
      fontSize: '13.5px',
      letterSpacing: '1.5px',
      color: theme.palette.primary.dark,
    })}
    >
      Content of this webpage belongs to Gerardas Anusevicius. Any illegal distribution may lead to legal prosecution
    </Typography>
    <Box>
      <FooterLink href="https://www.facebook.com/Geanphotography" target="_blank"><FacebookIcon /></FooterLink>
      <FooterLink href="https://www.instagram.com/gerard.a.photography/" target="_blank"><InstagramIcon /></FooterLink>
      <FooterLink href="https://www.linkedin.com/in/gerardas-anusevičius-783497194/" target="_blank"><LinkedInIcon /></FooterLink>
    </Box>
  </Container>
);

export default Footer;
