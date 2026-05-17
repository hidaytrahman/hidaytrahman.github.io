export const theme = {
  colors: {
    primary: '#8fb7ff',
    secondary: '#a78bfa',
    accent: '#5eead4',
    background: '#050b17',
    surface: '#0c1526',
    muted: '#94a3b8',
    border: 'rgba(255,255,255,0.12)',
    text: '#f8fafc',
    subText: '#cbd5e1',
  },
  units: {
    radius: '28px',
    padding: '18px',
    margin: '18px',
    maxWidth: '1320px',
  },
  responsive: {
    small: '768px',
    medium: '992px',
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#020314',
    surface: '#0b1220',
    text: '#e8efff',
    subText: '#94a3b8',
    border: 'rgba(255,255,255,0.14)',
  },
};
