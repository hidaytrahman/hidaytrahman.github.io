import { Box, Typography } from '@mui/material';

const SectionHeading = ({ title, subtitle }) => (
  <Box sx={{ mb: 3, position: 'relative' }}>
    <Typography
      variant="h4"
      sx={{
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.05,
        mb: 1,
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ maxWidth: 680, opacity: 0.78 }}
    >
      {subtitle}
    </Typography>
  </Box>
);

export default SectionHeading;
