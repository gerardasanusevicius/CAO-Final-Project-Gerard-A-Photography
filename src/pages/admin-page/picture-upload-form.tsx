import React, { useState } from 'react';
import {
  Box, Container, TextField, Typography,
} from '@mui/material';

import CustomButton from '../../components/custom-button/custom-button';
import ApiService from '../../services/api-service';
import { useRootSelector } from '../../store';
import { selectAuthToken } from '../../store/selectors';

const PictureUploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [srcSmall, setSrcSmall] = useState('');
  const [srcLarge, setSrcLarge] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [srcSmallError, setSrcSmallError] = useState(false);
  const [srcLargeError, setSrcLargeError] = useState(false);
  const token = useRootSelector(selectAuthToken);

  const handleSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault();
    setTitleError(false);
    setSrcSmallError(false);
    setSrcLargeError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (srcSmall === '') {
      setSrcSmallError(true);
    }
    if (srcLarge === '') {
      setSrcLargeError(true);
    }
    if (title && srcSmall && srcLarge && token) {
      ApiService.post('/api/pictures', { title, srcSmall, srcLarge }, {
        headers: {
          Authorization: token,
        },
      });
    }
  };

  return (
    <Container sx={{
      width: '31.25rem',
      display: 'flex',
      flexDirection: 'column',

    }}
    >
      <Typography component="h4" variant="h4" sx={{ m: '0 auto 1.2rem auto' }}>Upload a new picture</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <TextField
            id="title"
            label="Title"
            name="title"
            type="text"
            sx={{
              marginBottom: '1.2rem',
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
            label="Small size url "
            name="url"
            type="url"
            sx={{
              marginBottom: '1.2rem',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setSrcSmall(e.target.value)}
            error={srcSmallError}
          />
          <TextField
            id="url"
            label="Large size url"
            name="url"
            type="url"
            sx={{
              marginBottom: '1.2rem',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setSrcLarge(e.target.value)}
            error={srcLargeError}
          />
          <CustomButton btnLabel="Upload" type="submit" />
        </Box>
      </form>
    </Container>
  );
};

export default PictureUploadForm;
