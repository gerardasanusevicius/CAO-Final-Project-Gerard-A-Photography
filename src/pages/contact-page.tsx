import React from 'react';
import { Container, Typography } from '@mui/material';
import Section from '../components/section';

const ContactPage: React.FC = () => (
  <Container>
    <Section>
      <Typography>Section content..</Typography>
    </Section>

    <Typography
      component="h2"
      variant="h2"
      sx={(theme) => ({
        color: theme.palette.mediumColor.main,
      })}
    >
      Contacts...

    </Typography>
  </Container>
);

export default ContactPage;
