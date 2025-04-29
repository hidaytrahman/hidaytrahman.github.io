import Typography from "./common/Typography";
import { Button } from "react-carbonui";
import { useQuery } from "@tanstack/react-query";
import Modal from "react-modal";
import { useState } from "react";
import CV from "./cv";

import {
  StyledHeader,
  Flex,
  Container,
  ProfileAvatar,
  Avatar,
  Box,
  ProfileCard,
  StoryContainer,
  Divider,
  Link,
} from "./styled/Core.styled";
import { greetNow } from "core/utils";
import { STORY_MODES } from "core/config";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90vh",
    overflow: "auto",
    padding: "2rem",
  },
};

Modal.setAppElement("#root");

const Header = ({ profile, openModal }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [, setDownloadPDF] = useState(null);
  const {
    isLoading,
    error,
    data: currentIP,
  } = useQuery({
    queryKey: ["ipData"],
    queryFn: () =>
      fetch("https://api.ipify.org/?format=json").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

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
                {/* if story is enabled hightlight the picture */}
                {profile.meta?.story?.enabled ? (
                  <>
                    {/* Its a story mode */}
                    {profile.meta?.story?.mode === STORY_MODES.STORY ? (
                      <StoryContainer>
                        <div className="story active">
                          <figure className="image-container">
                            <ProfileAvatar onClick={openModal}>
                              <Avatar
                                width="200px"
                                src={profile.avatar_url}
                                alt="hidaytrahman profile photo"
                                title="hidaytrahman profile photo"
                                aria-label="hidaytrahman profile photo"
                              />
                            </ProfileAvatar>
                            <span className="live-text text">Updates</span>
                          </figure>
                        </div>
                      </StoryContainer>
                    ) : (
                      /* Its a LIVE mode */
                      <StoryContainer>
                        <div className="story live">
                          <figure className="image-container">
                            <ProfileAvatar onClick={openModal}>
                              <Avatar
                                width="200px"
                                src={profile.avatar_url}
                                alt="hidaytrahman stats"
                                title="hidaytrahman stats"
                                aria-label="hidaytrahman stats"
                              />
                            </ProfileAvatar>

                            <span className="live-text text">LIVE</span>
                          </figure>
                        </div>
                      </StoryContainer>
                    )}
                  </>
                ) : currentIP.ip === process.env.REACT_APP_MYIP ? (
                  // ONLY visible to me
                  <StoryContainer>
                    <div className="story create">
                      <figure className="image-container">
                        <ProfileAvatar>
                          <Avatar
                            width="200px"
                            src={profile.avatar_url}
                            alt="hidaytrahman stats"
                            title="hidaytrahman stats"
                            aria-label="hidaytrahman stats"
                          />
                        </ProfileAvatar>

                        <span className="add-story">+</span>
                      </figure>
                      <span className="user-name">Add a story</span>
                    </div>
                  </StoryContainer>
                ) : null}
              </Box>

              <Box width="300px" margin="10px" padding="20px">
                <Typography variant="h1">{profile.name}</Typography>
                <Typography variant="body1" margin="5px 0">
                  💼 {profile?.organization?.designation} at{" "}
                  <Link
                    href={profile?.organization?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile?.organization?.title}
                  </Link>
                </Typography>

                <Link
                  href="https://www.google.com/maps/place/Delhi/@28.6468931,76.9528367,11z/data=!3m1!4b1!4m5!3m4!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902"
                  target="_blank"
                >
                  <Typography variant="body2" margin="5px 0">
                    📍 {profile.location} 🇮🇳
                  </Typography>
                </Link>
                <Typography variant="body2" margin="5px 0">
                  🗨️󠁄󠁄 Language:{" "}
                  {profile.personal?.languages?.map(({ title }, index) => (
                    <span key={title}>
                      {title}
                      {index === profile.personal?.languages.length - 1
                        ? " "
                        : ", "}
                    </span>
                  ))}
                </Typography>

                <Divider />
                <Typography variant="body2"> {profile.bio}</Typography>
              </Box>
            </ProfileCard>

            {/* SECOND SECTION */}
            <Box margin="10px" padding="20px">
              <Typography variant="h3">Hi 👋 {greetNow()}</Typography>
              <br />
              <Typography variant="body1">
                {profile.greet?.replace(
                  "{{%totalExperience%}}",
                  profile.totalExperience
                )}
              </Typography>
              <Typography variant="body1" margin="10px 0">
                {profile.intro}
              </Typography>
              <Typography variant="body1">"{profile.quotes}"</Typography>
              <br />
              <Flex gap="15px" alignItems="center">
                <Button
                  variant="secondary"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/hidaytrahman/",
                      "_blank"
                    )
                  }
                >
                  Say Hi
                </Button>
                <Typography variant="body1">Or</Typography>
                <Button
                  variant="primary"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/hidaytrahman/15",
                      "_blank"
                    )
                  }
                >
                  Book my calender
                </Button>
              </Flex>
            </Box>
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
        <Flex
          gap="10px"
          justifyContent="flex-end"
          style={{ marginTop: "20px" }}
        >
          {/* <Button onClick={() => downloadPDF && downloadPDF()}>Download PDF</Button> */}
          <Button onClick={() => setIsResumeOpen(false)}>Close</Button>
        </Flex>
      </Modal>
    </>
  );
};

export default Header;
