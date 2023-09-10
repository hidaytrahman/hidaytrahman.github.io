import { GithubLogo, InstagramLogo, LinkedinLogo, MediumLogo } from 'phosphor-react';

export const getRepos = async (profile) => {
	try {
		let arr = [];
		for (let i = 0; i < profile.fav_repos.length; i++) {
			fetch(`https://api.github.com/repos/hidaytrahman/${profile.fav_repos[i]}`)
				.then((res) => res.json())
				.then((result) => {
					console.log('res ', result);
					arr.push(result);
				});
		}

		return await arr;
	} catch (e) {
		console.log(e);
	}
};

/*Motivated, determined, and ready to slay the day. #MonSlay
Be a rebel – enjoy Monday. Find a reason to like it.
Mondays are for fresh starts.
I love it when the coffee kicks in and I realize what an adorable bada** I’m going to be this week.
This is your Monday morning reminder that you can handle whatever this week throws at you.
It’s a good week to have a good week.
Monday is a state of mind. Put on your positive pants and get stuff done.
Your Monday morning thoughts set the tone for your whole week.
Hey, I know it’s Monday. But it’s also a new day and a new week. In that lies an opportunity for something special to happen
*/

// https://authenticallydel.com/funny-monday-quotes/
// https://parade.com/1105464/marynliles/tuesday-quotes/
// https://www.blogtrovert.com/funny-thursday-quotes/
// https://www.ourmindfullife.com/friday-quotes/
// https://routinelynomadic.com/funny-saturday-quotes/

export const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
export const weekdaysQuotes = [
	'Everyone wants me to be a morning person. I could be one, only if morning began after noon, Its Sunday!',
	'Be a rebel – enjoy Monday. Find a reason to like it.',
	'monday',
	'Tuesday is the day I actually start the week, Monday I just deal with the depression of the weekend ending.',
	'Dear Wednesday, no one likes you. You’re just the ugly cousin of Monday.  – Titteey',
	'Good morning, Thursday! Let’s make today so productive that we can afford to be lazy tomorrow',
	'Work starts on Monday. Life begins on Friday.',
	'I wish that every day was Saturday and every month was October.',
];

// const getInstagramPhotos = () => {
//   fetch("https://www.instagram.com/clickimaginehr/?__a=1")
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//     });
// };

// const getInstagramData = () => {
//   const response = JSON.parse(JSON.stringify(jsonData));
//   setiInsta(response.graphql.user);
// };
export const hexCodeStringOnly = (hex) => {
	const color = hex.includes('#') ? hex.substring(1) : hex;
	return color;
};

export const applyColor = (colors, index) => (colors ? hexCodeStringOnly(colors[index]) : '05122A');

export const colors = [
	'#FF6633',
	'#FFB399',
	'#FF33FF',
	'#FFFF99',
	'#00B3E6',
	'#E6B333',
	'#3366E6',
	'#999966',
	'#99FF99',
	'#B34D4D',
	'#80B300',
	'#809900',
	'#E6B3B3',
	'#6680B3',
	'#66991A',
	'#FF99E6',
	'#CCFF1A',
	'#FF1A66',
	'#E6331A',
	'#33FFCC',
	'#66994D',
	'#B366CC',
	'#4D8000',
	'#B33300',
	'#CC80CC',
	'#66664D',
	'#991AFF',
	'#E666FF',
	'#4DB3FF',
	'#1AB399',
	'#E666B3',
	'#33991A',
	'#CC9999',
	'#B3B31A',
	'#00E680',
	'#4D8066',
	'#809980',
	'#E6FF80',
	'#1AFF33',
	'#999933',
	'#FF3380',
	'#CCCC00',
	'#66E64D',
	'#4D80CC',
	'#9900B3',
	'#E64D66',
	'#4DB380',
	'#FF4D4D',
	'#99E6E6',
	'#6666FF',
];

// This is just for test*-
export function getAdultStatus(age) {
	if (age > 18) {
		return 'adult';
	} else {
		return 'kid';
	}
}

export const greetings = ['Good morning ☀️', 'Good afternoon 🌤', 'Good evening ⛅'];

export function greetNow() {
	const hour = new Date().getHours();

	if (hour < 5) return greetings[0];
	else if (hour < 18) return greetings[1];
	else return greetings[2];
}

export const socialIcons = [LinkedinLogo, GithubLogo, MediumLogo, InstagramLogo];

export function isWeekend() {
	var day = new Date().getDay();

	if (day === 6 || day === 0) {
		return true;
	} else {
		return false;
	}
}

export function isWeekend2() {
	const date = new Date();

	let dateString = weekdays[date.getDay()];
	return dateString === 'saturday' || dateString === 'sunday';
}

// export function getTodayDateString() {
// 	const todayDateObj = new Date(); // Today's date object
// 	todayDateObj.setHours(0, 0, 0, 0); // Set to midnight so we can use it as
// 	// a key in our data structure below:
// 	const formattedMonth = ('0' + String(todayDateObj.getMonth())).slice(-2),
// 		formattedDayOfMonth = ('0' + String(todayDateObj.getDate())).slice(-2),
// 		formattedYear = String(todayDateObj.getFullYear());
// 	return `${formattedYear}-${formattedMonth}-${formattedDayOfMonth}`;
// }

export function getCurrentDayName() {
	switch (new Date().getDay()) {
		case 0:
			return 'sunday';
		case 1:
			return 'monday';
		case 2:
			return 'tuesday';
		case 3:
			return 'wednesday';
		case 4:
			return 'thursday';
		case 5:
			return 'friday';
		case 6:
			return 'saturday';
		default:
	}
}
