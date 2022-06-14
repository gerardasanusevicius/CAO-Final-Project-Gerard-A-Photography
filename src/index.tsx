import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import lightTheme from './styles/theme';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Box sx={{ fontFamily: 'omnes-pro' }}>
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
