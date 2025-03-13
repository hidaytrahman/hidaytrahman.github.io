import Typography from './common/Typography';
import { Button } from 'react-carbonui';
import { useQuery } from 'react-query';
import Modal from 'react-modal';
import { useState } from 'react';
import CV from './cv';

import {
	StyledHeader,
	Flex,
	Container,
	ProfileAvatar,
	Avatar,
	Box,
	ProfileCard,
	StoryContainer,
} from './styled/Core.styled';
import { greetNow } from 'core/utils';
import { STORY_MODES } from 'core/config';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%',
    maxHeight: '90vh',
    overflow: 'auto',
    padding: '2rem'
  }
};

Modal.setAppElement('#root');

const Header = ({ profile, openModal }) => {
	const [isResumeOpen, setIsResumeOpen] = useState(false);
	const [, setDownloadPDF] = useState(null);
	const {
		isLoading,
		error,
		data: currentIP,
	} = useQuery('ipData', () => fetch('https://api.ipify.org/?format=json').then((res) => res.json()));

	if (isLoading) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	return (
		<>
			<StyledHeader>
				<Container padding='10px'>
					<Flex justifyContent='space-between' alignItems='center' margin='10px' padding='20px'>
						<ProfileCard>
							<Box>
								{/* if story is enabled hightlight the picture */}
								{profile.meta?.story?.enabled ? (
									<>
										{/* Its a story mode */}
										{profile.meta?.story?.mode === STORY_MODES.STORY ? (
											<StoryContainer>
												<div className='story active'>
													<figure className='image-container'>
														<ProfileAvatar onClick={openModal}>
															<Avatar
																width='200px'
																src={profile.avatar_url}
																alt='hidaytrahman profile photo'
																title='hidaytrahman profile photo'
																aria-label='hidaytrahman profile photo'
															/>
														</ProfileAvatar>
														<span className='live-text text'>Updates</span>
													</figure>
												</div>
											</StoryContainer>
										) : (
											/* Its a LIVE mode */
											<StoryContainer>
												<div className='story live'>
													<figure className='image-container'>
														<ProfileAvatar onClick={openModal}>
															<Avatar
																width='200px'
																src={profile.avatar_url}
																alt='hidaytrahman stats'
																title='hidaytrahman stats'
																aria-label='hidaytrahman stats'
															/>
														</ProfileAvatar>

														<span className='live-text text'>LIVE</span>
													</figure>
												</div>
											</StoryContainer>
										)}
									</>
								) : currentIP.ip === process.env.REACT_APP_MYIP ? (
									// ONLY visible to me
									<StoryContainer>
										<div className='story create'>
											<figure className='image-container'>
												<ProfileAvatar>
													<Avatar
														width='200px'
														src={profile.avatar_url}
														alt='hidaytrahman stats'
														title='hidaytrahman stats'
														aria-label='hidaytrahman stats'
													/>
												</ProfileAvatar>

												<span className='add-story'>+</span>
											</figure>
											<span className='user-name'>Add a story</span>
										</div>
									</StoryContainer>
								) : null}
							</Box>
							<Box>
								<Typography variant='h4'>{greetNow()}</Typography>
								<Typography variant='h2'>{profile.name}</Typography>
								<Typography variant='h5'>{profile.bio}</Typography>
								{/* <Button onClick={() => setIsResumeOpen(true)}>My Resume</Button> */}
							</Box>
						</ProfileCard>
					</Flex>
				</Container>
			</StyledHeader>
			<Modal
				isOpen={isResumeOpen}
				onRequestClose={() => setIsResumeOpen(false)}
				style={customStyles}
				contentLabel="Resume Modal"
			>
				<CV hideControls={true} onDownload={setDownloadPDF} />
				<Flex gap="10px" justifyContent="flex-end" style={{ marginTop: '20px' }}>
					{/* <Button onClick={() => downloadPDF && downloadPDF()}>Download PDF</Button> */}
					<Button onClick={() => setIsResumeOpen(false)}>Close</Button>
				</Flex>
			</Modal>
		</>
	);
};

export default Header;
