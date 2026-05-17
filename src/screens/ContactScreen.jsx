import { Box, Button, Link, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GlassPanel from 'components/ui/GlassPanel';
import SectionHeading from 'components/ui/SectionHeading';

const ContactScreen = ({ profile }) => {
  const contactLink = profile.socials?.find((item) => item.title === 'Linkedin')?.url || profile.blog;

  return (
    <Box component="section" sx={{ mb: 10 }}>
      <SectionHeading
        title="Ready for the next collaboration"
        subtitle="If you want polished interfaces, seamless engineering, and a portfolio that feels like a product, let’s connect."
      />

      <GlassPanel sx={{ p: { xs: 4, md: 5 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="subtitle2" sx={{ color: 'secondary.main', textTransform: 'uppercase', letterSpacing: 1.3, mb: 2 }}>
              Let’s build together
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5 }}>
              I’m available for senior frontend leadership roles, consulting, and product-focused collaborations.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 640, lineHeight: 1.85 }}>
              Reach out for new product launches, UI system design, or modern web apps with motion-driven interactions.
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              href={contactLink}
              target="_blank"
              rel="noreferrer"
              endIcon={<OpenInNewIcon />}
            >
              Message me
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              href={`mailto:${profile.email || 'hello@hidaytrahman.dev'}`}
            >
              Start with mail
            </Button>
          </Stack>
        </Stack>
      </GlassPanel>
    </Box>
  );
};

export default ContactScreen;
