import { theme, darkTheme } from 'core/theme';
import { ThemeProvider } from 'styled-components';
import Profile from './components/profile/Profile';
import GlobalStyle from 'components/styled/GlobalStyle';
import Theme from 'components/theme/Theme';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	const [activeTheme, setActiveTheme] = useState(theme);

	const currentTheme = () => {
		if (localStorage.getItem('theme') === 'dark') {
			setActiveTheme(darkTheme);
		} else {
			setActiveTheme(theme);
		}
	};

	useEffect(() => {
		currentTheme();
	}, []);

	return (
		<main className='App'>
			<ThemeProvider theme={activeTheme}>
				<Theme setActiveTheme={setActiveTheme} theme={theme} darkTheme={darkTheme} />
				<GlobalStyle />
				<QueryClientProvider client={queryClient}>
					<Profile />
				</QueryClientProvider>
			</ThemeProvider>
		</main>
	);
}

export default App;
