import React, { useContext } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';
import lightTheme from '../../styles/theme';
import AuthContext from '../../features/auth/auth-context';

type AuthFormProps = {
  formTitle: string,
  submitText: string,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const contentWidth = 350;

const AuthForm: React.FC<AuthFormProps> = ({
  formTitle,
  submitText,
  onSubmit,
  children,
}) => {
  const { error, clearError } = useContext(AuthContext);

  return (
    <Container sx={{ position: 'relative', pt: 10 }}>
      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Alert
            sx={{
              position: 'absolute',
              top: 0,
              minWidth: contentWidth,
              mt: 12,
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
        elevation={1}
        sx={{
          display: 'flex',
          mx: 'auto',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          p: 3,
          width: 350,
          borderRadius: 0,
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
          variant="outlined"
          size="large"
          type="submit"
          sx={{
            borderRadius: 0,
            color: lightTheme.palette.darkColor.main,
          }}
        >
          {submitText}
        </Button>
      </Paper>
    </Container>
  );
};

export default AuthForm;
