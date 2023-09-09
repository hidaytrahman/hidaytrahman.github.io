import { API, base } from 'core/config';
import { Badge, Box, Container, Divider, Flex } from '../styled/Core.styled';
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Typography from '../common/Typography';
import axios from 'axios';
import githubProfile from 'core/data/profile.json';
import githubMe from 'core/data/me.json';
import Skills from 'components/skills/Skills';
import Repos from 'components/repos/Repos';

import Stats from './Stats';
import DevToArticles from 'components/articles/devto/DevToArticles';

const Profile = () => {
	const [profile, setProfile] = useState([]);

	const getProfile = async () => {
		try {
			let me = null;
			if (base.isLocal) {
				const response = JSON.parse(JSON.stringify(githubProfile));
				me = JSON.parse(JSON.stringify(githubMe));
				console.log(' me ', me);
				setProfile({ ...response, ...me });
			} else {
				// Direct github api calls

				const meFromGithub = await axios.get(
					'https://raw.githubusercontent.com/hidaytrahman/hidaytrahman/main/me.json'
				);

				const me = meFromGithub.data;

				const res = await axios.get(API.profile.url);
				const completeProfile = { ...res.data, ...me };
				console.log(completeProfile);
				setProfile(completeProfile);
			}
		} catch (_) {}
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<>
			<Header profile={profile} />

			<Skills profile={profile} />

			<Container>
				<Divider margin='1rem' />
			</Container>

			<Container padding='2rem'>
				<Flex>
					<Box width='100%'>
						<Typography variant='h3'>Responsibilities</Typography>
						<br />
						<Typography variant='body2'>
							<strong>Highlights</strong>
						</Typography>
						<ul>
							{profile.responsibilities?.highlights?.map((item, index) => (
								<li key={index}>
									<Typography variant='body2'>{item}</Typography>
								</li>
							))}
						</ul>

						<Typography variant='body2'>
							<strong>Frontend</strong>
						</Typography>
						<ul>
							{profile.responsibilities?.frontend?.map((item, index) => (
								<li key={index}>
									<Typography variant='body2'>{item}</Typography>
								</li>
							))}
						</ul>

						<Typography variant='body2'>
							<strong>Backend</strong>
						</Typography>
						<ul>
							{profile.responsibilities?.backend?.map((item, index) => (
								<li key={index}>
									<Typography variant='body2'>{item}</Typography>
								</li>
							))}
						</ul>
					</Box>

					<Box maxWidth='370px' dividerLeft={true}>
						<div>
							<Typography variant='h3'>Domains</Typography>
							{profile.domains &&
								profile.domains.split(',').map((item, index) => <Badge key={index}>{item}</Badge>)}
						</div>
						<br />

						<div>
							<Typography variant='h3'>Categories</Typography>
							{profile.categories?.map((item, index) => (
								<Badge key={index}>{item}</Badge>
							))}
						</div>
					</Box>
				</Flex>
			</Container>

			<Stats profile={profile} />

			<Repos profile={profile} />

			<section>
				<Container padding='20px'>
					<Typography variant='h3'>Top Articles</Typography>
					<DevToArticles />
				</Container>
			</section>

			{/* 
      <Container>
        <Divider margin="1rem" />
      </Container>

    <Container padding="20px">
        <Image src="https://github-readme-medium-card.vercel.app/getMediumBlogs?username=hidaytrahman&theme=light&limit=2" />
      </Container> */}

			<Footer profile={profile} />
		</>
	);
};

export default Profile;
