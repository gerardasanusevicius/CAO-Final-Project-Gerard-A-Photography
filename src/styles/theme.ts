import { createTheme } from '@mui/material';
import omnesPro from './omnes-pro.otf';

const theme = createTheme();

const lightTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#a6a6a6',
      light: '#ededed',
      dark: '#242424',
    },
    lightColor: {
      main: '#ededed',
    },
    mediumColor: {
      main: '#a6a6a6',
    },
    darkColor: {
      main: '#242424',
    },
    background: {
      default: '#f7f7f7',
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
