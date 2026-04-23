import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const baseTheme = {
  typography: {
    fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(','),
    h1: { fontWeight: 700, letterSpacing: '-0.04em' },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
};

export const lightMuiTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#386dc7',
    },
    secondary: {
      main: '#00adb5',
    },
    background: {
      default: '#f3f7ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
    divider: blueGrey[100],
  },
});

export const darkMuiTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#89a7ff',
    },
    secondary: {
      main: '#50c6d5',
    },
    background: {
      default: '#07101c',
      paper: '#0f1520',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
    divider: blueGrey[700],
  },
});
