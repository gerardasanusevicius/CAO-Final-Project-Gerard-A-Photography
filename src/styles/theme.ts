import { createTheme } from '@mui/material';
import omnesPro from './omnes-pro.otf';

const theme = createTheme();

const lightTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#a6a6a6',
      light: '#f7f7f7',
      dark: '#141414',
    },
    lightColor: {
      main: '#f7f7f7',
    },
    mediumColor: {
      main: '#a6a6a6',
    },
    darkColor: {
      main: '#141414',
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
  mixins: {
    section: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
});

export default lightTheme;
