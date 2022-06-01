import {
  Box, Container, TextField,
} from '@mui/material';

import axios from 'axios';
import React, { useState } from 'react';
import CustomButton from '../../components/custom-button/custom-button';

const UploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [src, setSrc] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [srcError, setSrcError] = useState(false);

  const handleSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault();
    setTitleError(false);
    setSrcError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (src === '') {
      setSrcError(true);
    }
    if (title && src) {
      axios.post('http://localhost:8000/pictures', { title, src });
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
            sx={{
              marginBottom: '25px',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setTitle(e.target.value)}
            error={titleError}
          />
          <TextField
            id="url"
            label="Url"
            name="url"
            type="url"
            sx={{
              marginBottom: '25px',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setSrc(e.target.value)}
            error={srcError}
          />
          <CustomButton btnLabel="Upload" type="submit" />
        </Box>
      </form>
    </Container>
  );
};

export default UploadForm;
