import { GithubLogo, InstagramLogo, LinkedinLogo, MediumLogo, Activity } from 'phosphor-react';

import Typography from './common/Typography';
import {
	StyledHeader,
	Flex,
	Container,
	ProfileAvatar,
	Avatar,
	Box,
	Link,
	Divider,
	ProfileCard,
} from './styled/Core.styled';
import { greetNow, socialIcons } from 'core/utils';
import { Button } from 'react-carbonui';

const Header = ({ profile }) => {
	return (
		<>
			<StyledHeader>
				<Container padding='10px'>
					<Flex justifyContent='space-between' alignItems='center' margin='10px' padding='20px'>
						<ProfileCard>
							<Box>
								<ProfileAvatar>
									<Avatar width='200px' src={profile.avatar_url} />
								</ProfileAvatar>

								<Box margin='10px' padding='10px'>
									{profile.socials?.map((social, index) => {
										const Icon = socialIcons[index];
										return (
											<Link
												margin='5px'
												href={social.url}
												target='_blank'
												key={social.title + index}
											>
												<Icon size={32} />
											</Link>
										);
									})}
								</Box>
							</Box>

							<Box width='300px' margin='10px' padding='20px'>
								<Typography variant='h1'>{profile.name}</Typography>
								<Typography variant='body1' type='secondary' margin='5px 0'>
									💼 {profile?.organization?.designation}{' '}
									<Link href={profile?.organization?.url} target='_blank' rel='noopener noreferrer'>
										{profile?.organization?.title}
									</Link>
								</Typography>

								<Link
									href='https://www.google.com/maps/place/Delhi/@28.6468931,76.9528367,11z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902'
									target='_blank'
								>
									<Typography variant='body2' margin='5px 0'>
										📍 {profile.location} 🇮🇳
									</Typography>
								</Link>
								<Typography variant='body2' type='secondary' margin='5px 0'>
									🗨️󠁄󠁄 Language:{' '}
									{profile.personal?.languages?.map(({ title }, index) => (
										<span key={title}>
											{title}
											{index === profile.personal?.languages.length - 1 ? ' ' : ', '}
										</span>
									))}
								</Typography>

								<Divider />
								<Typography variant='body2'> {profile.bio}</Typography>
							</Box>
						</ProfileCard>

						<Box margin='10px' padding='20px'>
							<Typography variant='h3'>Hi 👋 {greetNow()}</Typography>
							<br />
							<Typography variant='body1'>
								{profile.greet?.replace('{{%totalExperience%}}', profile.totalExperience)}
							</Typography>
							<Typography variant='body1' margin='10px 0'>
								{profile.intro}
							</Typography>
							<Typography variant='body1'>"{profile.quotes}"</Typography>
							<br />
							<Button
								variant='secondary'
								onClick={() => window.open('https://www.linkedin.com/in/hidaytrahman/', '_blank')}
							>
								Say Hi
							</Button>
						</Box>
					</Flex>
				</Container>
			</StyledHeader>
		</>
	);
};

export default Header;
