import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import { theme, darkTheme } from 'core/theme';
import { lightMuiTheme, darkMuiTheme } from 'core/muiTheme';
import profileData from 'core/data/profile.json';
import meData from 'core/data/me.json';
import GlobalStyle from 'components/styled/GlobalStyle';
import ThemeToggle from 'components/theme/ThemeToggle';
import HeroScreen from 'screens/HeroScreen';
import AboutScreen from 'screens/AboutScreen';
import SkillsScreen from 'screens/SkillsScreen';
import ProjectsScreen from 'screens/ProjectsScreen';
import ContactScreen from 'screens/ContactScreen';

const defaultProfile = { ...profileData, ...meData };

function App() {
  const [mode, setMode] = useState('dark');
  const [profile] = useState(defaultProfile);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setMode(storedTheme === 'light' ? 'light' : 'dark');
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

  // add a todo
  const todo = () => {
    console.log('This is a todo item');

    const todos = [];
    const newTodo = { id: 1, text: 'Learn React', completed: false };
    todos.push(newTodo);
    console.log('Added todo:', newTodo);

    // edit todo
    console.log('This is an edited todo item');

    const editedTodo = { ...newTodo, text: 'Learn React and Redux' };
    console.log('Edited todo:', editedTodo);

    // delete todo
    console.log('This is a deleted todo item');
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={activeTheme}>
        <CssBaseline />
        <GlobalStyle />
        <Box
          component="main"
          sx={{ minHeight: '100vh', position: 'relative', pb: 8 }}
        >
          <Container
            maxWidth="xl"
            sx={{
              pt: { xs: 4, md: 6 },
              pb: { xs: 6, md: 8 },
              position: 'relative',
            }}
          >
            <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 10 }}>
              <ThemeToggle mode={mode} onToggle={handleThemeToggle} />
            </Box>
            <HeroScreen profile={profile} />
            <AboutScreen profile={profile} />
            <SkillsScreen profile={profile} />
            <ProjectsScreen profile={profile} />
            <ContactScreen profile={profile} />
          </Container>
        </Box>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
