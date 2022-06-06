import React from 'react';
import { Box, Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import InfoContainer from '../../components/info-container';
import ContactForm from './contact-form';

const ContactPage: React.FC = () => (
  <InfoContainer>
    <Box sx={{
      width: '100%',
      m: 'auto 0px',
    }}
    >

      <Divider sx={{
        marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />
      <Paragraph>
        PHOTOGRAPHER & DIRECTOR GERARDAS ANUSEVICIUS
        <br />
        Phone: +37060214243
        <br />
        Email: gerard.a.official@gmail.com
      </Paragraph>
      <Divider sx={{
        marginBottom: '1rem', marginTop: '1rem', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />
    </Box>
    <ContactForm />
  </InfoContainer>
);

export default ContactPage;
