export const API = {
	profile: {
		url: 'https://api.github.com/users/hidaytrahman',
	},
	repo: {
		url: 'https://api.github.com/users/hidaytrahman/repos',
	},
};

export const base = {
	isLocal: true && window.location.hostname === 'localhost',
};

if (base.isLocal) {
	console.warn('%cMock Mode: ON', 'font-size: 18px; background: yellow;');
}
