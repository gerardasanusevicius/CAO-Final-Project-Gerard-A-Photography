import {
  Box, Container, TextField, Typography,
} from '@mui/material';

import axios from 'axios';
import React, { useState } from 'react';
import CustomButton from '../../components/custom-button/custom-button';
import { useRootDispatch } from '../../store/hooks';
import { authLogoutAction } from '../../store/features/auth/auth-action-creators';

const ProjectUploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [urlError, setUrlError] = useState(false);

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
    if (title && url) {
      axios.post('http://localhost:8000/projects', { title, url });
    }
  };

  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
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
