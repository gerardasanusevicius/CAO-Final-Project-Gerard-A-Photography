import React from 'react';
import { Divider } from '@mui/material';
import Paragraph from '../../components/paragraph';
import InfoContainer from '../../components/info-container';

const ContactPage: React.FC = () => (
  <InfoContainer>
    <Paragraph sx={{
      width: '100%',
      m: 'auto 0px',
    }}
    >
      <Divider sx={{
        marginBottom: '15px', marginTop: '15px', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />
      PHOTOGRAPHER & DIRECTOR GERARDAS ANUSEVICIUS
      <br />
      Phone: +37060214243
      <br />
      Email: gerard.a.official@gmail.com
      <Divider sx={{
        marginBottom: '15px', marginTop: '15px', borderBottomWidth: 2, borderRadius: '50%',
      }}
      />
    </Paragraph>
  </InfoContainer>
);

export default ContactPage;
