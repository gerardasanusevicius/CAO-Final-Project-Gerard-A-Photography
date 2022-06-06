import { createTheme } from '@mui/material';
import omnesPro from './omnes-pro.otf';

const lightTheme = createTheme({
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
    h1: {
      '@media (max-width:1400px)': {
        fontSize: '4rem',
      },
      fontSize: '5.5rem',
    },
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
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      md: 800,
      lg: 1065,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default lightTheme;
