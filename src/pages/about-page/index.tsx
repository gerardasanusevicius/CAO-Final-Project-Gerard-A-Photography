import React from 'react';
import { Box, Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import AboutPicture from './gerard_about_picture.jpg';

const AboutPage: React.FC = () => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    p: '40px 80px',
    m: '0px',
  }}
  >
    <Paragraph sx={{
      width: '30%',
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
  </Box>
);

export default AboutPage;
