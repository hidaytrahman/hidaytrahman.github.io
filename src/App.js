import { theme, darkTheme } from "core/theme";
import { ThemeProvider } from "styled-components";
import Profile from "./components/profile/Profile";
import GlobalStyle from "components/styled/GlobalStyle"

function App() {
  return (
    <main className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Profile />
      </ThemeProvider>
    </main>
  );
}

export default App;
