import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import ReactDOM from 'react-dom';
import App from './app';
import lightTheme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box sx={{ fontFamily: 'omnes-pro' }}>
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
