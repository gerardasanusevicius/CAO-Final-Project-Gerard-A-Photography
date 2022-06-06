import {
  Box, Container, TextField,
} from '@mui/material';

import React, { useState } from 'react';
import CustomButton from '../../components/custom-button/custom-button';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [clientName, setClientName] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [clientNameError, setClientNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault();
    setEmailError(false);
    setClientNameError(false);
    setMessageError(false);

    if (email === '') {
      setEmailError(true);
    }
    if (clientName === '') {
      setClientNameError(true);
    }
    if (message === '') {
      setMessageError(true);
    }
    if (email && clientName && message) {
      alert('feature coming soon');
    }
  };

  return (
    <Container sx={{
      width: '31.25rem',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <TextField
            id="email"
            label="Your email"
            name="email"
            type="email"
            sx={{
              marginBottom: '1.2rem',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <TextField
            id="title"
            label="Your name"
            name="title"
            type="text"
            sx={{
              marginBottom: '1.2rem',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setClientName(e.target.value)}
            error={clientNameError}
          />
          <TextField
            id="message"
            label="Your message"
            name="message"
            type="text"
            multiline
            rows={2}
            sx={{
              marginBottom: '1.2rem',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setMessage(e.target.value)}
            error={messageError}
          />
          <CustomButton btnLabel="Send" type="submit" />
        </Box>
      </form>
    </Container>
  );
};

export default ContactForm;
