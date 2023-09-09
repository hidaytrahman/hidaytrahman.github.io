import axios from 'axios';
import Typography from 'components/common/Typography';
import { Container, Flex, Image, Link } from 'components/styled/Core.styled';
import { API, base } from 'core/config';
import { useEffect, useState } from 'react';

const Repos = ({ profile }) => {
	const [repos, setRepos] = useState([]);

	const getRepos = async () => {
		if (base.isLocal) {
		} else {
			const res = await axios.get(API.repo.url);
			console.log('res ', res);
			setRepos(res.data);
		}
	};

	useEffect(() => {
		getRepos();
	}, []);

	return (
		repos &&
		repos.length > 0 && (
			<Container padding='20px'>
				<Typography variant='h3'>Open Source Projects</Typography>
				<Flex wrap='wrap'>
					{repos
						.filter((item) => profile.fav_repos?.includes(item.name))
						.map((item, index) => (
							// <RepoCard
							//   key={index}
							//   bg={theme.colors.secondary}
							//   padding="20px"
							//   margin="10px"
							//   width="50%"
							//   item={item}
							// ></RepoCard>
							<Link href={item.html_url} target='_blank' key={index}>
								<Image
									height='100px'
									margin='10px'
									src={`https://github-readme-stats.vercel.app/api/pin/?username=hidaytrahman&repo=${item.name}`}
								/>
							</Link>
						))}
				</Flex>
			</Container>
		)
	);
};

export default Repos;
