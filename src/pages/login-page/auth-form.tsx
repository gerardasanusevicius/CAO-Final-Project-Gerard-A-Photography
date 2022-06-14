import React from 'react';
import {
  Alert,
  Box,
  Button,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';

import { useRootDispatch } from '../../store/hooks';
import { useRootSelector } from '../../store';
import { selectAuthLoggedIn, selectAuthError } from '../../store/selectors';
import { authClearErrorAction } from '../../store/action-creators';
import InfoContainer from '../../components/info-container';

type AuthFormProps = {
  formTitle: string,
  submitText: string,
  btnActive?: boolean,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const authFormtWidth = '30rem';

const AuthForm: React.FC<AuthFormProps> = ({
  formTitle,
  submitText,
  btnActive = true,
  onSubmit,
  children,
}) => {
  const dispatch = useRootDispatch();
  const loading = useRootSelector(selectAuthLoggedIn);
  const error = useRootSelector(selectAuthError);

  const clearError = () => {
    dispatch(authClearErrorAction);
  };

  return (
    <InfoContainer sx={{ display: 'flex', flexDirection: 'column' }}>
      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            sx={{
              minWidth: authFormtWidth,
              m: '0 auto',
              height: '3rem',
            }}
            color="error"
            onClose={clearError}
          >
            {error}
          </Alert>
        </Box>
      )}
      <Paper
        component="form"
        elevation={0}
        sx={{
          display: 'flex',
          mx: 'auto',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          p: '1rem',
          width: authFormtWidth,
          borderRadius: 0,
          bgcolor: 'primary.light',
        }}
        onSubmit={onSubmit}
      >
        <Typography
          component="h1"
          variant="h4"
        >
          {formTitle}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: 1 / 1,
          my: '1rem',
        }}
        >
          {children}
        </Box>
        <Button
          variant="text"
          type="submit"
          disabled={!btnActive || loading}
          sx={{
            borderRadius: 0,
            color: 'primary.main',
            ':hover': { color: 'primary.dark', background: 'none' },
          }}
        >
          {loading ? <CircularProgress size={15} /> : submitText }
        </Button>
      </Paper>
    </InfoContainer>
  );
};

export default AuthForm;
