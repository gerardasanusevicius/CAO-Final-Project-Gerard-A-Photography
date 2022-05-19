import { createTheme } from '@mui/material';
import omnesPro from './omnes-pro.otf';

const theme = createTheme();

const lightTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#a6a6a6',
      light: '#f2f2f2',
      dark: '#262626',
    },
    background: {
      default: '#f2f2f2',
    },
  },
  typography: {
    fontFamily: 'omnes-pro',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: omnes-pro;
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${omnesPro});
        }
      `,
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'omnes-pro',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'omnes-pro',
        },
      },
    },
  },
});

export default lightTheme;
