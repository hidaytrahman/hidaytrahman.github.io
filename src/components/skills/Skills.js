import Typography from 'components/common/Typography';
import { Box, Container, Flex, Skill } from 'components/styled/Core.styled';
import { applyColor, colors } from 'core/utils';

const Skills = ({ profile }) => {
	return (
		<Container padding='2rem'>
			<Flex>
				<Box>
					<Typography variant='h3' margin='5px 0'>
						Skillset
					</Typography>
					<Flex wrap='wrap' gap={2}>
						<Box width='100%'>
							<Typography variant='body2'>
								<strong>Primary</strong>
							</Typography>

							{profile?.skills?.primary &&
								profile?.skills?.primary.map((skill, index) => (
									<Skill
										src={`https://img.shields.io/badge/-${skill.title}-${applyColor(
											colors,
											index
										)}?style=flat&logo=${skill.title.toLocaleLowerCase()}`}
										key={index}
									/>
								))}
						</Box>

						<Box width='100%'>
							<Typography variant='body2'>
								<strong>Frameworks</strong>
							</Typography>
							{profile?.skills?.frameworks &&
								profile?.skills?.frameworks.map((skill, index) => (
									<Skill
										src={`https://img.shields.io/badge/-${skill.title}-${applyColor(
											colors,
											index
										)}?style=flat&logo=${skill.title.toLocaleLowerCase()}`}
										key={index}
									/>
								))}
						</Box>

						<Box width='100%'>
							<Typography variant='body2'>
								<strong>Secondary</strong>
							</Typography>
							{profile?.skills?.secondary &&
								profile?.skills?.secondary.map((skill, index) => (
									<Skill
										src={`https://img.shields.io/badge/-${skill.title}-${applyColor(
											colors,
											index + 2
										)}?style=flat&logo=${skill.title.toLocaleLowerCase()}`}
										key={index}
									/>
								))}
						</Box>
					</Flex>
				</Box>
			</Flex>
		</Container>
	);
};

export default Skills;
