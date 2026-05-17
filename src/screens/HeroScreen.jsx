import { Avatar, Box, Button, Chip, Link, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GlassPanel from 'components/ui/GlassPanel';

const HeroScreen = ({ profile }) => {
  const callToActionUrl = profile.socials?.find((item) => item.title === 'Linkedin')?.url || profile.blog;

  return (
    <Box component="section" sx={{ position: 'relative', mb: 10, pt: 3 }}>
      <Box className="hero-orb hero-orb--blue" />
      <Box className="hero-orb hero-orb--pink" />

      <GlassPanel sx={{ p: { xs: 4, md: 6 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, gap: 4, alignItems: 'center' }}>
        <Box>
          <Typography component="p" sx={{ color: 'secondary.main', letterSpacing: 2, mb: 2, textTransform: 'uppercase', fontWeight: 700 }}>
            Modern Portfolio Experience
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.02, mb: 3 }}>
            Hi, I’m {profile.name}.
            <br />
            I build bold, glassy digital products for ambitious brands.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mb: 4, lineHeight: 1.85 }}>
            {profile.intro || 'A product-led frontend architect focused on reactive interfaces, polished motion, and build systems that feel effortless.'}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              endIcon={<OpenInNewIcon />}
              href={callToActionUrl}
              target="_blank"
              rel="noreferrer"
            >
              Connect
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              href={`mailto:${profile.email || 'hello@hidaytrahman.dev'}`}
            >
              Email Me
            </Button>
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {profile.personal?.languages?.map((language) => (
              <Chip key={language.title} label={language.title} color="secondary" size="small" sx={{ borderRadius: 2 }} />
            ))}
          </Stack>
        </Box>

        <Box sx={{ display: 'grid', placeItems: 'center' }}>
          <Box sx={{ position: 'relative', width: { xs: 240, sm: 320 }, height: { xs: 240, sm: 320 }, mx: 'auto' }}>
            <Avatar
              src={profile.avatar_url}
              alt={profile.name}
              sx={{ width: '100%', height: '100%', border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 28px 50px rgba(0,0,0,0.35)' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                px: 2.5,
                py: 1,
                bgcolor: 'rgba(6, 16, 36, 0.92)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 0.5 }}>
                Senior Technology Lead
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ mt: 3 }}>
            {profile.socials?.slice(0, 4).map((social) => (
              <Link
                key={social.title}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: 'text.primary', fontWeight: 600, opacity: 0.88 }}
              >
                {social.title}
                <OpenInNewIcon sx={{ fontSize: 16 }} />
              </Link>
            ))}
          </Stack>
        </Box>
      </GlassPanel>
    </Box>
  );
};

export default HeroScreen;
