import { useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Stack, Typography, Paper } from '@mui/material';
import { theme, darkTheme } from 'core/theme';
import { lightMuiTheme, darkMuiTheme } from 'core/muiTheme';
import Profile from './components/profile/Profile';
import ThemeToggle from './components/theme/ThemeToggle';
import WeekendBanner from './components/common/WeekendBanner/WeekendBanner';

const queryClient = new QueryClient();

function App() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setMode(storedTheme === 'dark' ? 'dark' : 'light');
  }, []);

  const activeTheme = useMemo(
    () => (mode === 'dark' ? darkTheme : theme),
    [mode],
  );
  const muiTheme = useMemo(
    () => (mode === 'dark' ? darkMuiTheme : lightMuiTheme),
    [mode],
  );

  const handleThemeToggle = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    setMode(nextMode);
    localStorage.setItem('theme', nextMode);
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={activeTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Box
            component="main"
            sx={{
              minHeight: '100vh',
              bgcolor: 'background.default',
              color: 'text.primary',
            }}
          >
            <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 } }}>
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
                mb={4}
              >
                <Box>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ letterSpacing: 1.2 }}
                  >
                    Frontend Architect Portfolio
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h1"
                    fontWeight={700}
                    sx={{ mt: 1, maxWidth: 700 }}
                  >
                    Hi, I’m Hidayt — building polished interfaces with modern
                    React and a product-first mindset.
                  </Typography>
                </Box>
                <ThemeToggle mode={mode} onToggle={handleThemeToggle} />
              </Stack>
              <Paper
                elevation={0}
                sx={{ borderRadius: 4, overflow: 'hidden', mb: 4 }}
              >
                <WeekendBanner />
              </Paper>
              <Profile />
            </Container>
          </Box>
        </QueryClientProvider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
