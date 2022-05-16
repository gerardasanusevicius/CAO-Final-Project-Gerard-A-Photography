import React from 'react';
import { Box, Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import AboutPicture from './gerard_about_picture.jpg';
import InfoContainer from '../../components/info-container';

const AboutPage: React.FC = () => (
  <InfoContainer>
    <Paragraph sx={{
      width: '36%',
      m: 'auto 0px',
    }}
    >
      <Divider sx={{
        marginBottom: '15px', marginTop: '15px', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />
      I am Gerardas Anusevicius - a photographer from Vilnius, Lithuania.
      <Divider sx={{
        marginBottom: '15px', marginTop: '15px', borderBottomWidth: 2, borderRadius: '50%',
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
        marginBottom: '15px', marginTop: '15px', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />
    </Paragraph>
    <Box
      component="img"
      src={AboutPicture}
      alt="gerard_about_pic"
      sx={{
        width: '450px',
        height: '450px',
      }}
    />
  </InfoContainer>
);

export default AboutPage;
