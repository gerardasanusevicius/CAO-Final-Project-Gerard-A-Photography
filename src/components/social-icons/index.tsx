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
  color?: string,
};

const SocialIcons: React.FC<SocialIconsProps> = ({
  position = 'static',
  left = null,
  right = null,
  top = null,
  bottom = null,
  color,
}) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      position,
      left,
      right,
      top,
      bottom,
    }}
  >
    <SocialLink
      sx={(theme) => ({
        ':hover .css-i4bv87-MuiSvgIcon-root': {
          color: color || 'darkColor.main',
        },
      })}
      className="sociallink"
      href="https://www.facebook.com/Geanphotography"
      target="_blank"
    >
      <FacebookIcon />
    </SocialLink>

    <SocialLink
      sx={(theme) => ({
        ':hover .css-i4bv87-MuiSvgIcon-root': {
          color: color || 'darkColor.main',
        },
      })}
      className="sociallink"
      href="https://www.instagram.com/gerard.a.photography/"
      target="_blank"
    >
      <InstagramIcon />

    </SocialLink>
    <SocialLink
      sx={(theme) => ({
        ':hover .css-i4bv87-MuiSvgIcon-root': {
          color: color || 'darkColor.main',
        },
      })}
      className="sociallink"
      href="https://www.linkedin.com/in/gerardas-anusevičius-783497194/"
      target="_blank"
    >
      <LinkedInIcon />

    </SocialLink>
  </Box>
);

export default SocialIcons;
