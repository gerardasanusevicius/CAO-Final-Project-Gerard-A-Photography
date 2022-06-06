import {
  Box, Container, TextField,
} from '@mui/material';

import axios from 'axios';
import React, { useState } from 'react';
import CustomButton from '../../components/custom-button/custom-button';
import { useRootDispatch } from '../../store/hooks';
import { authLogoutAction } from '../../store/features/auth/auth-action-creators';

const UploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [srcSmall, setSrcSmall] = useState('');
  const [srcLarge, setSrcLarge] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [srcSmallError, setSrcSmallError] = useState(false);
  const [srcLargeError, setSrcLargeError] = useState(false);

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
    if (title && srcSmall && srcLarge) {
      axios.post('http://localhost:8000/pictures', { title, srcSmall, srcLarge });
    }
  };

  const dispatch = useRootDispatch();

  const logout = () => {
    dispatch(authLogoutAction);
  };

  return (
    <Container sx={{
      marginTop: '6.25rem',
      width: '31.25rem',
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
      <CustomButton sx={{ display: { xxs: 'block', lg: 'none' }, mt: '3rem' }} onClick={logout} btnLabel="Logout" />
    </Container>
  );
};

export default UploadForm;
