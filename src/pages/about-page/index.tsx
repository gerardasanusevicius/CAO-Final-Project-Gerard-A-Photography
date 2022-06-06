import React from 'react';
import { Box, Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import AboutPicture from './gerard_about_picture.jpg';
import InfoContainer from '../../components/info-container';
import ExternalLink from './external-link';

const AboutPage: React.FC = () => (
  <InfoContainer>
    <Paragraph sx={{
      maxWidth: '40rem',
      m: { xs: '0 auto', md: 0 },
    }}
    >

      <Divider sx={{
        marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />

      I am Gerardas Anusevicius - a photographer from Vilnius, Lithuania.

      <Divider sx={{
        marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />

      I create art in the form of:
      <br />
      fashion,
      <br />
      boudoir,
      <br />
      fine art,
      <br />
      backstage photography.

      <Divider sx={{
        marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />

      As a director I organised, photographed and wrote articles for:

      <a href="https://www.swomag.com/average-is-the-new-black/" target="_blank" rel="noreferrer">
        <ExternalLink>Average is the new black</ExternalLink>
      </a>
      <a href="https://www.swomag.com/shapes-and-shadows/" target="_blank" rel="noreferrer">
        <ExternalLink>Shapes and Shadows</ExternalLink>

      </a>

      <Divider sx={{
        marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />

    </Paragraph>
    <Box
      component="img"
      src={AboutPicture}
      alt="gerard_about_pic"
      sx={{
        maxWidth: '40rem',
        height: 'auto',
        m: { xs: '0 auto', md: 0 },
      }}
    />
  </InfoContainer>
);

export default AboutPage;
