import {
  Box, Button, Container, TextField,
} from '@mui/material';

import axios from 'axios';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [src, setSrc] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [srcError, setSrcError] = useState(false);
  const [uuid, setUuid] = useState('');

  const handleSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault();
    setTitleError(false);
    setSrcError(false);
    const uniqueId = uuidv4();
    setUuid(uniqueId);

    if (title === '') {
      setTitleError(true);
    }
    if (src === '') {
      setSrcError(true);
    }
    if (title && src) {
      axios.post('http://localhost:8000/pictures', { title, src, uuid });
    }
  };

  return (
    <Container sx={{
      marginTop: '100px',
      width: '250px',
      display: 'flex',
      flexDirection: 'column',

    }}
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <TextField
            id="title"
            label="Title"
            name="title"
            type="text"
            sx={{ marginBottom: '25px' }}
            required
            onChange={(e) => setTitle(e.target.value)}
            error={titleError}
          />
          <TextField
            id="url"
            label="Url"
            name="url"
            type="url"
            sx={{ marginBottom: '25px' }}
            required
            onChange={(e) => setSrc(e.target.value)}
            error={srcError}
          />
          <Button type="submit">Upload</Button>
        </Box>
      </form>
    </Container>
  );
};

export default UploadForm;
