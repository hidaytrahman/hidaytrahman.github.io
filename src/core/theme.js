export const theme = {
	colors: {
		primary: '#6366F1',
		secondary: '#F8FAFC',
		grey: '#94A3B8',
		card: '#ffffff',
		success: '#22C55E',
		danger: '#EF4444',
		warning: '#F59E0B',
		white: '#fff',
		text: '#1E293B',
		accent: '#3B82F6',
		background: '#F1F5F9'
	},
	units: {
		radius: '10px',
		margin: '10px',
		padding: '10px',
		maxWidth: '1366px',
	},
	responsive: {
		small: '767px',
		medium: '922px',
		large: '1200px'
	},
	animations: {
		transition: 'all 0.3s ease-in-out',
		hover: 'transform 0.2s ease-in-out',
		fadeIn: 'fadeIn 0.5s ease-in',
		slideIn: 'slideIn 0.5s ease-out'
	},
	shadows: {
		small: '0 1px 3px rgba(0,0,0,0.12)',
		medium: '0 4px 6px rgba(0,0,0,0.1)',
		large: '0 10px 15px rgba(0,0,0,0.1)'
	}
};

export const darkTheme = {
	...theme,
	colors: {
		...theme.colors,
		primary: '#818CF8',
		secondary: '#1E293B',
		light: '#94A3B8',
		text: '#E2E8F0',
		card: '#0F172A',
		background: '#1E293B',
		accent: '#60A5FA'
	},
};

export const card_themes = {
	dracula: {
		background: '#282a36',
		foreground: '#f8f8f2',
		border: '#44475a',
		logo: '#f8f8f2',
		icon: '#f8f8f2',
		// icon: "#8be9fd",
	},
	stackoverflowdark: {
		background: '#2D2D2D',
		foreground: '#F2F2F3',
		border: '#404345',
		logo: '#F2F2F3',
		icon: '#F2F2F3',
	},
	stackoverflowlight: {
		background: '#fff',
		foreground: '#0f0f0f',
		border: '#d6d9dc',
		logo: 'default',
		icon: '#0f0f0f',
	},
	gruvboxdark: {
		background: '#282828',
		foreground: '#ebdab4',
		border: '#7c6f65',
		logo: '#ebdab4',
		icon: '#ebdab4',
	},
	gruvboxlight: {
		background: '#fbf0c9',
		foreground: '#3c3836',
		border: '#a89985',
		logo: 'default',
		icon: '#3c3836',
	},
	solarizeddark: {
		background: '#002b36',
		foreground: '#839294',
		border: '#073642',
		logo: '#839294',
		icon: '#839294',
	},
	solarizedlight: {
		background: '#fdf6e3',
		foreground: '#586e75',
		border: '#eee8d5',
		logo: 'default',
		icon: '#586e75',
	},
	tomorrownight: {
		background: '#1d1f21',
		foreground: '#c5c8c6',
		border: '#373b41',
		logo: '#c5c8c6',
		icon: '#c5c8c6',
	},
	tomorrow: {
		background: '#ffffff',
		foreground: '#4d4d4c',
		border: '#d6d6d6',
		logo: 'default',
		icon: '#4d4d4c',
	},
	tomorrownighteighties: {
		background: '#2d2d2d',
		foreground: '#cccccc',
		border: '#515151',
		logo: '#cccccc',
		icon: '#cccccc',
	},
	tomorrownightblue: {
		background: '#002451',
		foreground: '#ffffff',
		border: '#003f8e',
		logo: '#ffffff',
		icon: '#ffffff',
	},
	tomorrownightbright: {
		background: '#000000',
		foreground: '#eaeaea',
		border: '#424242',
		logo: '#eaeaea',
		icon: '#eaeaea',
	},
};
