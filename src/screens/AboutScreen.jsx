import { Box, Chip, Grid, Typography } from '@mui/material';
import GlassPanel from 'components/ui/GlassPanel';
import SectionHeading from 'components/ui/SectionHeading';

const AboutScreen = ({ profile }) => {
  const stats = [
    { label: 'Experience', value: `${profile.totalExperience || 0}+ years` },
    { label: 'Location', value: profile.location || 'Remote / Hybrid' },
    { label: 'Projects', value: `${profile.public_repos || 0}+ repos` },
    { label: 'Focus', value: profile.company || 'Creative teams' },
  ];

  return (
    <Box component="section" sx={{ mb: 10 }}>
      <SectionHeading
        title="A bold, modern portfolio for a modern developer"
        subtitle="A compact black glass interface that highlights your best work, your story, and the systems that move projects forward."
      />

      <GlassPanel sx={{ p: { xs: 4, md: 5 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7}>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main', letterSpacing: 1.2 }}>
              About me
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
              {profile.bio || 'A frontend-focused architect who blends UI craftsmanship with performance-first engineering. I enjoy building products that feel fast, tactile, and polished from first interaction to deployment.'}
            </Typography>

            <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {profile.categories?.list?.slice(0, 8).map((item) => (
                <Chip key={item} label={item} color="secondary" size="small" sx={{ borderRadius: 2, py: 1.2 }} />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Box sx={{ display: 'grid', gap: 2 }}>
              {stats.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1.1, mb: 1 }}>
                    {stat.label}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </GlassPanel>
    </Box>
  );
};

export default AboutScreen;
