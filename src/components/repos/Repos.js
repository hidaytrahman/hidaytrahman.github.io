import axios from 'axios';
import Typography from 'components/common/Typography';
import { Container } from 'components/styled/Core.styled';
import { API, base } from 'core/config';
import { useEffect, useState } from 'react';
import { ProjectCard, RepoGrid } from './Repos.styled';

const Repos = ({ profile }) => {
	const [repos, setRepos] = useState([]);

	const getRepos = async () => {
		if (false) {
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
				<RepoGrid>
					{repos
						.filter((item) => profile.fav_repos?.includes(item.name))
						.map((item, index) => (
							<ProjectCard key={index}>
								<div className="project-header">
									<h3 className="project-title">{item.name.replace(/-/g, ' ')}</h3>
									<p className="project-description">{item.description}</p>
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

export default Repos;
