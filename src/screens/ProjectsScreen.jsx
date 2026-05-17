import { Box, Link, Typography } from '@mui/material';
import GlassPanel from 'components/ui/GlassPanel';
import SectionHeading from 'components/ui/SectionHeading';

const ProjectsScreen = ({ profile }) => {
  const repoList = profile.fav_repos || [];
  const repoUrl = (repo) => `https://github.com/${profile.login}/${repo}`;

  return (
    <Box component="section" sx={{ mb: 10 }}>
      <SectionHeading
        title="Featured projects and open-source highlights"
        subtitle="A clean showcase of hands-on work, where each repository reflects a commitment to quality, performance, and modern frontend craftsmanship."
      />

      <GlassPanel sx={{ p: { xs: 4, md: 5 } }}>
        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' } }}>
          {repoList.map((repo) => (
            <Box
              key={repo}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.25s ease',
                '&:hover': { transform: 'translateY(-4px)' },
              }}
            >
              <Typography variant="subtitle2" sx={{ mb: 1, color: 'secondary.main' }}>
                Repository
              </Typography>
              <Link href={repoUrl(repo)} target="_blank" rel="noreferrer" sx={{ fontWeight: 700, display: 'block', mb: 1.5 }}>
                {repo}
              </Link>
              <Typography variant="body2" color="text.secondary">
                A modern frontend repository with a focus on reusable UI, performance, and clean architecture.
              </Typography>
            </Box>
          ))}
        </Box>
      </GlassPanel>
    </Box>
  );
};

export default ProjectsScreen;
