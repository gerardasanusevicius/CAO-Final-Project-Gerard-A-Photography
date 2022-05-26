import { Button, Container, TextField } from '@mui/material';
import React from 'react';

const UploadForm: React.FC = () => (
  <Container sx={{
    marginTop: '100px', width: '250px', display: 'flex', flexDirection: 'column',
  }}
  >
    <TextField
      id="title"
      label="Title"
      name="title"
      type="text"
      sx={{ marginBottom: '25px' }}
    />
    <TextField
      id="url"
      label="Url"
      name="url"
      type="url"
      sx={{ marginBottom: '25px' }}
    />
    <Button type="submit">Upload</Button>
  </Container>
);

export default UploadForm;
