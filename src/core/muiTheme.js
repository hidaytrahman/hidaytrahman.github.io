import { createTheme } from '@mui/material/styles';

const baseTheme = {
  typography: {
    fontFamily: ['Inter', 'system-ui', 'sans-serif'].join(','),
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    body1: { lineHeight: 1.85 },
    body2: { lineHeight: 1.75 },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 18,
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
  },
};

export const lightMuiTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#8fb7ff',
    },
    secondary: {
      main: '#c084fc',
    },
    background: {
      default: '#020314',
      paper: '#0e172a',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
});

export const darkMuiTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#8fb7ff',
    },
    secondary: {
      main: '#5eead4',
    },
    background: {
      default: '#020314',
      paper: '#0b1320',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255,255,255,0.14)',
  },
});
