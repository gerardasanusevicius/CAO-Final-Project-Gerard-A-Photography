import React from 'react';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialLink from './social-link';

type SocialIconsProps = {
  margin?: string | number,
  color?: string,
};

const SocialIcons: React.FC<SocialIconsProps> = ({
  margin = 0,
  color,
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      transform: 'translateX(0.125rem)',
      zIndex: '5',
      margin,
    }}
  >
    <SocialLink
      sx={{
        ':hover .css-i4bv87-MuiSvgIcon-root': {
          color: color || 'primary.dark',
        },
      }}
      className="sociallink"
      href="https://www.facebook.com/Geanphotography"
      target="_blank"
    >
      <FacebookIcon />
    </SocialLink>

    <SocialLink
      sx={{
        ':hover .css-i4bv87-MuiSvgIcon-root': {
          color: color || 'primary.dark',
        },
      }}
      className="sociallink"
      href="https://www.instagram.com/gerard.a.photography/"
      target="_blank"
    >
      <InstagramIcon />

    </SocialLink>
    <SocialLink
      sx={{
        ':hover .css-i4bv87-MuiSvgIcon-root': {
          color: color || 'primary.dark',
        },
      }}
      className="sociallink"
      href="https://www.linkedin.com/in/gerardas-anusevičius-783497194/"
      target="_blank"
    >
      <LinkedInIcon />

    </SocialLink>
  </Box>
);

export default SocialIcons;
