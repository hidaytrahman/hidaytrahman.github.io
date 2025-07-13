import { API, base } from 'core/config';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useTheme } from 'styled-components';
import { Button } from 'react-carbonui';
import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  List,
  Section,
} from '../styled/Core.styled';
import Footer from '../Footer';
import Header from '../Header';
import Typography from '../common/Typography';
import Skills from 'components/skills/Skills';
import Stats from './Stats';
import DevToArticles from 'components/articles/devto/DevToArticles';
import { getCurrentDayName, isWeekend, weekdays } from 'core/utils';
import { MyStories } from 'components/common/Stories';
import CV from 'components/cv/CV';
import FavRepos from 'components/repos/FavRepos';
import { useProfileData } from './useProfileData';

// TODO: refactor the ugly code from this file :)

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
    padding: '2rem',
  },
};

Modal.setAppElement('#root');

const Profile = () => {
  const theme = useTheme();
  const profile = useProfileData();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isExperiment, setIsExperiment] = useState(false);

  useEffect(() => {
    // Check for resume query parameter
    const params = new URLSearchParams(window.location.search);
    const resumeParam = params.get('resume');
    const experiments = params.get('experiments');
    if (resumeParam === 'modern') {
      setIsResumeOpen(true);
    }
    if (experiments === 'true') {
      setIsExperiment(true);
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Stories"
      >
        <MyStories story={profile?.meta?.story} />
      </Modal>

      <Header profile={profile} openModal={openModal} />

      <Section variant="secondary">
        <Container padding="20px">
          {isWeekend() ? (
            <>
              {getCurrentDayName() === weekdays[6]
                ? profile.meta?.weekdaysQuotes?.[6]
                : null}
              {getCurrentDayName() === weekdays[1]
                ? profile.meta?.weekdaysQuotes?.[1]
                : null}
            </>
          ) : (
            <>
              {getCurrentDayName() === weekdays[new Date().getDay()]
                ? profile.meta?.weekdaysQuotes?.[new Date().getDay()]
                : null}
            </>
          )}
        </Container>
      </Section>

      <Skills profile={profile} />

      <Container>
        <Divider margin="1rem" />
      </Container>

      <Section>
        <Container padding="2rem">
          <Flex gap="20px" alignItems="center" justifyContent="space-between">
            <Box width="100%">
              <Typography variant="h3">Responsibilities</Typography>
              <br />
              <Typography variant="body2">
                <strong>Highlights</strong>
              </Typography>
              <List>
                {profile.responsibilities?.highlights?.map((item) => (
                  <li key={item}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
              </List>

              <Typography variant="body2">
                <strong>Frontend</strong>
              </Typography>
              <List>
                {profile.responsibilities?.frontend?.map((item) => (
                  <li key={item}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
              </List>

              <Typography variant="body2">
                <strong>Backend</strong>
              </Typography>
              <List>
                {profile.responsibilities?.backend?.map((item) => (
                  <li key={item}>
                    <Typography variant="body2">{item}</Typography>
                  </li>
                ))}
              </List>
            </Box>

            <Box maxWidth="300px" dividerLeft={true}>
              <div>
                <Typography variant="h3">Domains</Typography>
                {profile.domains &&
                  profile.domains
                    .split(',')
                    .map((item) => <Badge key={item}>{item}</Badge>)}
              </div>
              <br />

              <Box dividerTop={true}>
                <Typography variant="h3">
                  {profile.categories?.title}
                </Typography>
                {profile.categories?.list?.map((item) => (
                  <Badge
                    key={item}
                    background={theme.colors.primary}
                    fullwidth="true"
                  >
                    {item}
                  </Badge>
                ))}
              </Box>

              <Flex justifycontent="center">
                <Button
                  variant="secondary"
                  size="large"
                  onClick={() =>
                    window.open(
                      'https://calendly.com/hidaytrahman/15',
                      '_blank'
                    )
                  }
                >
                  Quick Call?
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Section>

      <Stats profile={profile} />

      {/* <Repos profile={profile} /> */}
      <FavRepos isExperiment={isExperiment} />

      {isExperiment ? <CV /> : null}

      <section>
        <Container padding="20px">
          <Typography variant="h3">Top Articles</Typography>
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
      <Modal
        isOpen={isResumeOpen}
        onRequestClose={() => setIsResumeOpen(false)}
        style={customStyles}
        contentLabel="Resume Modal"
      >
        <CV hideControls={false} />
        <Flex
          gap="10px"
          justifyContent="flex-end"
          style={{ marginTop: '20px' }}
        >
          <Button onClick={() => setIsResumeOpen(false)}>Close</Button>
        </Flex>
      </Modal>
    </>
  );
};

export default Profile;
