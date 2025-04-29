import axios from 'axios';
import Typography from 'components/common/Typography';
import { Badge, Container, Divider } from 'components/styled/Core.styled';
import { API, base } from 'core/config';
import { useCallback, useEffect, useState } from 'react';
import favRepos from 'core/data/fav_repos.json';
import { ProjectCard, RepoGrid } from './Repos.styled';

const FavRepos = ({isExperiment}) => {
	const [repos, setRepos] = useState([]);

	const getRepos = useCallback(async () => {

		try {
			if (base.isLocal) {
				// adding the me.json data to the profile
				const response = JSON.parse(JSON.stringify(favRepos));
				console.log(' response.fav_repos ', response.fav_repos);
				setRepos(response.fav_repos);
			} else {
				// Remote github api calls
				// calling the fav_repos.json file as an API from the github repo 'hidaytrahman'
				const fav_repos = await axios.get(
					API.fav_repos.url
				);
				console.log({ fav_repos });
				// setting the profile
				setRepos(fav_repos);
			}
		} catch (_) { }
	}, []);

	useEffect(() => {
		getRepos();
	}, [getRepos]);

	return (
		repos &&
		repos.length > 0 && (
			<Container padding='20px'>
				<Typography variant='h2'>My Open Source Projects</Typography>
				<Typography variant='body2' type="secondary">Because sleep is overrated, and code is life.</Typography>
				<Typography variant='body3' type="secondary">Your code can change someone’s world. Keep building, keep sharing.</Typography>
				<RepoGrid>
					{repos
						// .filter((item) => profile.fav_repos?.includes(item.name))
						.map((item, index) => (
							<ProjectCard key={index}>
								<div className="project-header">
									<h3 className="project-title">{item.name.replace(/-/g, ' ')} <Badge>{item.stargazers_count}</Badge></h3>
									<p className="project-description">{item.description}</p>

									<Divider />
									<Typography variant='body3'>Language: {item.language}</Typography>
									{/* <Typography variant='body3'>{item.license.name}</Typography> */}
									{
										isExperiment ? <><Typography variant='body3'>Open Issues: {item.open_issues}</Typography>
										<Typography variant='body3'>Created: {item.created_at.substring(0, 4)}</Typography>
										<span className='code-line'>git clone {item.clone_url}</span> </>: null
									}
									
								</div>
								<div className="project-links">
									{item.homepage && (
										<a href={item.homepage} target="_blank" rel="noopener noreferrer" className="project-link primary">
											Live Demo
										</a>
									)}
									<a href={item.html_url} target="_blank" rel="noopener noreferrer" className="project-link secondary">
										GitHub
									</a>
								</div>
							</ProjectCard>
						))}
				</RepoGrid>
			</Container>
		)
	);
};

export default FavRepos;
