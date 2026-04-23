import { API, base } from 'core/config';
import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import Footer from '../Footer';
import Header from '../Header';
import githubProfile from 'core/data/profile.json';
import githubMe from 'core/data/me.json';
import Skills from 'components/skills/Skills';
import Stats from './Stats';
import DevToArticles from 'components/articles/devto/DevToArticles';
import { isWeekend } from 'core/utils';
import { MyStories } from 'components/common/Stories';
import CV from 'components/cv/CV';
import FavRepos from 'components/repos/FavRepos';

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
  const [profile, setProfile] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isExperiment, setIsExperiment] = useState(false);

  useEffect(() => {
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

  const getProfile = useCallback(async () => {
    try {
      if (base.isLocal) {
        const response = JSON.parse(JSON.stringify(githubProfile));
        const me = JSON.parse(JSON.stringify(githubMe));
        setProfile({ ...response, ...me });
      } else {
        const meFromGithub = await axios.get(API.me.url);
        const me = meFromGithub.data;
        const res = await axios.get(API.profile.url);
        setProfile({ ...res.data, ...me });
      }
    } catch (error) {
      console.error('Failed to load profile data', error);
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const quote = useMemo(() => {
    if (!profile) return '';
    const dayIndex = new Date().getDay();
    if (isWeekend() && profile.meta?.weekdaysQuotes) {
      return (
        profile.meta.weekdaysQuotes?.[dayIndex] || profile.quotes?.[0] || ''
      );
    }
    return profile.quotes?.[0] || profile.bio || '';
  }, [profile]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Stories"
      >
        <MyStories story={profile?.meta?.story} />
      </Modal>

      <Header profile={profile} openModal={() => setIsOpen(true)} />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Card
          variant="outlined"
          sx={{
            mb: 4,
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            bgcolor: 'background.paper',
          }}
        >
          <CardContent>
            <Typography variant="h6" color="primary" gutterBottom>
              Daily update
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {quote}
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <Card
              variant="outlined"
              sx={{ borderRadius: 4, p: { xs: 3, md: 4 }, mb: 4 }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h5" fontWeight={700}>
                    What I build
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {profile.intro ||
                      'I build thoughtful user interfaces, reusable design systems, and performance-first frontend experiences.'}
                  </Typography>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    flexWrap="wrap"
                  >
                    <Chip
                      label={`${profile.totalExperience || 0}+ years experience`}
                      color="primary"
                    />
                    <Chip
                      label={profile.designation || 'Technology Lead'}
                      variant="outlined"
                    />
                  </Stack>
                  <Box
                    sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}
                  >
                    {profile.personal?.languages?.map((language) => (
                      <Chip
                        key={language.title}
                        label={language.title}
                        size="small"
                      />
                    ))}
                  </Box>
                  <Box
                    sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 2 }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => setIsResumeOpen(true)}
                    >
                      View Resume
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        window.open(
                          'https://calendly.com/hidaytrahman/15',
                          '_blank',
                        )
                      }
                    >
                      Book a call
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card
              variant="outlined"
              sx={{ borderRadius: 4, p: { xs: 3, md: 4 }, mb: 4 }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Areas of impact
                </Typography>
                <Grid container spacing={3}>
                  {['highlights', 'frontend', 'backend'].map((section) => (
                    <Grid key={section} item xs={12} md={4}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        gutterBottom
                      >
                        {section === 'highlights'
                          ? 'Highlights'
                          : section === 'frontend'
                            ? 'Frontend'
                            : 'Backend'}
                      </Typography>
                      {(profile.responsibilities?.[section] || [])
                        .slice(0, 6)
                        .map((item, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                          >
                            • {item}
                          </Typography>
                        ))}
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card
              variant="outlined"
              sx={{
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                mb: 4,
                height: '100%',
              }}
            >
              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <Typography variant="h6" fontWeight={700}>
                  Professional domains
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {profile.domains?.split(',').map((domain) => (
                    <Chip
                      key={domain}
                      label={domain.trim()}
                      variant="outlined"
                    />
                  ))}
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                  Hire me for
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {profile.categories?.list?.map((item) => (
                    <Chip key={item} label={item} color="secondary" />
                  ))}
                </Stack>
                <Box sx={{ flexGrow: 1 }} />
                <Link
                  href="https://calendly.com/hidaytrahman/15"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                >
                  <Button fullWidth variant="contained">
                    Book a quick call
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Skills profile={profile} />

        <Divider sx={{ my: 5 }} />

        <Stats profile={profile} />

        <Divider sx={{ my: 5 }} />

        <FavRepos isExperiment={isExperiment} />

        <Divider sx={{ my: 5 }} />

        <Box sx={{ py: 2 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Articles worth reading
          </Typography>
          <DevToArticles />
        </Box>

        <Divider sx={{ my: 5 }} />

        <Footer profile={profile} />
      </Container>

      <Modal
        isOpen={isResumeOpen}
        onRequestClose={() => setIsResumeOpen(false)}
        style={customStyles}
        contentLabel="Resume Modal"
      >
        <CV hideControls={false} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button onClick={() => setIsResumeOpen(false)}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Profile;
