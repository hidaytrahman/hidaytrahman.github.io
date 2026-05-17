import { Box, Typography } from '@mui/material';

const FeatureCard = ({ title, description }) => (
  <Box
    sx={{
      p: 3,
      bgcolor: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 3,
      minHeight: 150,
      transition: 'transform 0.25s ease, border-color 0.25s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        borderColor: 'rgba(138, 180, 255, 0.24)',
      },
    }}
  >
    <Typography
      variant="subtitle2"
      sx={{ color: 'secondary.main', textTransform: 'uppercase', mb: 1.25 }}
    >
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
      {description}
    </Typography>
  </Box>
);

export default FeatureCard;
