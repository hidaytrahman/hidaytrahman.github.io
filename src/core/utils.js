export const getRepos = async (profile) => {
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
};

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
	const color = hex.substring(1);
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

export const greetings = ['Good morning', 'Good afternoon', 'Good evening'];

export function greetNow() {
	const hour = new Date().getHours();

	if (hour < 12) return greetings[0];
	else if (hour < 18) return greetings[1];
	else return greetings[2];
}
