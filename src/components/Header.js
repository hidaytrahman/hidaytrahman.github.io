import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "phosphor-react";
import Typography from "./common/Typography";
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
} from "./styled/Core.styled";

const Header = ({ profile }) => {
  // const clickHandler = (url) => {
  //   window.open(url, "_blank");
  // };

  return (
    <>
      <StyledHeader>
        <Container padding="10px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            margin="10px"
            padding="20px"
          >
            <ProfileCard>
              <Box>
                <ProfileAvatar>
                  <Avatar width="200px" src={profile.avatar_url} />
                </ProfileAvatar>

                <Box margin="10px" padding="10px">
                  <Link
                    margin="5px"
                    href="https://www.linkedin.com/in/hidaytrahman/"
                    target="_blank"
                  >
                    <LinkedinLogo size={32} />
                  </Link>

                  <Link
                    margin="5px"
                    href="https://github.com/hidaytrahman"
                    target="_blank"
                  >
                    <GithubLogo size={32} />
                  </Link>

                  <Link
                    margin="5px"
                    href="https://hidaytrahman.medium.com/"
                    target="_blank"
                  >
                    <MediumLogo size={32} />
                  </Link>

                  <Link
                    margin="5px"
                    href="https://instagram.com/hidaytrahman/"
                    target="_blank"
                  >
                    <InstagramLogo size={32} />
                  </Link>
                </Box>
              </Box>

              <Box width="300px" margin="10px" padding="20px">
                <Typography variant="h1">{profile.name}</Typography>
                <Typography variant="body1" type="secondary" margin="5px 0">
                  FrontEnd Engineer at <Link href="https://qatalog.com/" target="_blank" rel="noopener noreferrer">Qatalog</Link>
                </Typography>

                <Link
                  href="https://www.google.com/maps/place/Delhi/@28.6468931,76.9528367,11z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902"
                  target="_blank"
                >
                  <Typography variant="body2" margin="5px 0">
                    {profile.location}
                  </Typography>
                </Link>

                <Divider />
                <Typography variant="body2">{profile.bio}</Typography>
              </Box>
            </ProfileCard>

            <Box margin="10px" padding="20px">
              <Typography margin="10px 0">{profile.intro}</Typography>
              <Typography>"{profile.quotes}"</Typography>
            </Box>
          </Flex>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
