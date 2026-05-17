import { Box, Chip, Grid, Typography } from '@mui/material';
import GlassPanel from 'components/ui/GlassPanel';
import SectionHeading from 'components/ui/SectionHeading';

const SkillsScreen = ({ profile }) => {
  const categories = [
    { title: 'Primary', items: profile.skills?.primary || [] },
    { title: 'Secondary', items: profile.skills?.secondary || [] },
    { title: 'Frameworks', items: profile.skills?.frameworks || [] },
    { title: 'Tools', items: profile.skills?.tools || [] },
  ].filter((category) => category.items?.length);

  return (
    <Box component="section" sx={{ mb: 10 }}>
      <SectionHeading
        title="Skillset that feels sharp and polished"
        subtitle="A curated glance at the languages, frameworks, and tools that define the way I build modern digital experiences."
      />

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid key={category.title} item xs={12} md={6}>
            <GlassPanel sx={{ p: { xs: 3, md: 4 }, minHeight: 280 }}>
              <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
                {category.title}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
                {category.items.slice(0, 16).map((skill) => (
                  <Chip
                    key={skill.title}
                    label={skill.title}
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ borderColor: 'rgba(255,255,255,0.12)', color: 'text.primary' }}
                  />
                ))}
              </Box>
            </GlassPanel>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsScreen;
