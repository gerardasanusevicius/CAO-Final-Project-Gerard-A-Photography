import React from 'react';
import { Divider, Box } from '@mui/material';
import Paragraph from '../../components/paragraph';
import InfoContainer from '../../components/info-container';

const ContactPage: React.FC = () => (
  <InfoContainer>
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
    <Paragraph />
  </InfoContainer>
);

export default ContactPage;
