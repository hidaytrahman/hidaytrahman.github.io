import { theme } from "core/theme";
import { ThemeProvider } from "styled-components";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <main className="App">
      <ThemeProvider theme={theme}>
        <Profile />
      </ThemeProvider>
    </main>
  );
}

export default App;
