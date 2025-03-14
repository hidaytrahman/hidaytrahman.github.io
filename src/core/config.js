export const API = {
	profile: {
		url: 'https://api.github.com/users/hidaytrahman',
	},
	repo: {
		url: 'https://api.github.com/users/hidaytrahman/repos',
	},
	me: {
		url: 'https://raw.githubusercontent.com/hidaytrahman/hidaytrahman/main/me.json'
	},
	fav_repos: {
		url: 'https://raw.githubusercontent.com/hidaytrahman/hidaytrahman/main/fav_repos.json'
	}
};

export const base = {
	isLocal: true && window.location.hostname === 'localhost',
};

if (base.isLocal) {
	console.warn('%cMock Mode: ON', 'font-size: 18px; background: yellow;');
}

export const STORY_MODES = {
	LIVE: 'live',
	STORY: 'story',
};
