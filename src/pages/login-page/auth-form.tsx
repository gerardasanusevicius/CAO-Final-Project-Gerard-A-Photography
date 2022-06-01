import React from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';

import { useRootDispatch } from '../../store/hooks';
import { useRootSelector } from '../../store';
import { selectLoggedIn, selectAuthError } from '../../store/selectors';
import { authClearErrorAction } from '../../store/action-creators';

type AuthFormProps = {
  formTitle: string,
  submitText: string,
  btnActive?: boolean,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const contentWidth = 350;

const AuthForm: React.FC<AuthFormProps> = ({
  formTitle,
  submitText,
  btnActive = true,
  onSubmit,
  children,
}) => {
  const dispatch = useRootDispatch();
  const loading = useRootSelector(selectLoggedIn);
  const error = useRootSelector(selectAuthError);

  const clearError = () => {
    dispatch(authClearErrorAction);
  };

  return (
    <Container sx={{ position: 'relative', pt: 10 }}>
      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            sx={{
              position: 'absolute',
              top: 0,
              minWidth: contentWidth,
              mt: 3,
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
          gap: 1,
          p: 3,
          width: contentWidth,
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
          gap: 2,
          width: 1 / 1,
          my: 2,
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
    </Container>
  );
};

export default AuthForm;
