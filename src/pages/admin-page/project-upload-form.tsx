import React, { useState } from 'react';
import {
  Box, Container, TextField, Typography,
} from '@mui/material';

import CustomButton from '../../components/custom-button/custom-button';
import ApiService from '../../services/api-service';
import { useRootSelector } from '../../store';
import { selectAuthToken } from '../../store/selectors';

const ProjectUploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const token = useRootSelector(selectAuthToken);

  const handleSubmit = (e : React.SyntheticEvent) => {
    e.preventDefault();
    setTitleError(false);
    setUrlError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (url === '') {
      setUrlError(true);
    }
    if (title && url && token) {
      ApiService.post('/api/projects', { title, url }, {
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
      <Typography component="h4" variant="h4" sx={{ m: '0 auto 1.2rem auto' }}>Upload a new project</Typography>
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
            label="Url"
            name="url"
            type="url"
            sx={{
              marginBottom: '1.2rem',
              '& fieldset': {
                borderRadius: 0,
              },
            }}
            required
            onChange={(e) => setUrl(e.target.value)}
            error={urlError}
          />
          <CustomButton btnLabel="Upload" type="submit" />
        </Box>
      </form>
    </Container>
  );
};

export default ProjectUploadForm;
