import Typography from 'components/common/Typography';
import { Container, Flex, Image, Section } from 'components/styled/Core.styled';

const Stats = ({ profile }) => {
	return (
		<Section variant='secondary'>
			<Container padding='20px'>
				<Typography variant='h3'>Stats</Typography>
				<Flex>
					<Image
						margin='10px'
						height='137px'
						src='https://stackoverflow-card.vercel.app/?userID=2927228&theme=solarizedlight'
						alt='stackoverflow stats'
						title='stackoverflow stats'
						aria-label='stackoverflow stats'
					/>
					<Image
						margin='10px'
						height='137px'
						src='https://github-readme-stats.vercel.app/api/top-langs/?username=hidaytrahman&layout=compact'
						alt='most used language stats'
						title='most used language stats'
						aria-label='most used language stats'
					/>
					<Image
						margin='10px'
						height='137px'
						src='https://github-readme-stats.vercel.app/api?username=hidaytrahman&theme=buefy&show_icons=true&count_private=true'
						alt='github stats'
						title='github stats'
						aria-label='github stats'
					/>
					<Image
						margin='10px'
						height='137px'
						src='https://github-readme-stats.vercel.app/api/wakatime?username=hidaytrahman'
						alt='wakatime stats'
						title='wakatime stats'
						aria-label='wakatime stats'
					/>
				</Flex>
			</Container>
		</Section>
	);
};

export default Stats;
