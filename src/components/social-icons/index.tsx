import React from 'react';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialLink from '../social-link';

type SocialIconsProps = {
  position?: string,
  left?: string | number,
  right?: string | number,
  top?: string | number,
  bottom?: string | number,
  color?: string | number,
};

const SocialIcons: React.FC<SocialIconsProps> = ({
  position, left, right, top, bottom, color,
}) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    position: position || 'static',
    left: left || null,
    right: right || null,
    top: top || null,
    bottom: bottom || null,
  }}
  >
    <SocialLink
      sx={(theme) => ({
        ':hover': {
          color: color || theme.palette.primary.dark,
        },
      })}
      href="https://www.facebook.com/Geanphotography"
      target="_blank"
    >
      <FacebookIcon />
    </SocialLink>

    <SocialLink
      sx={(theme) => ({
        ':hover': {
          color: color || theme.palette.primary.dark,
        },
      })}
      href="https://www.instagram.com/gerard.a.photography/"
      target="_blank"
    >
      <InstagramIcon />

    </SocialLink>
    <SocialLink
      sx={(theme) => ({
        ':hover': {
          color: color || theme.palette.primary.dark,
        },
      })}
      href="https://www.linkedin.com/in/gerardas-anusevičius-783497194/"
      target="_blank"
    >
      <LinkedInIcon />

    </SocialLink>
  </Box>
);

export default SocialIcons;
