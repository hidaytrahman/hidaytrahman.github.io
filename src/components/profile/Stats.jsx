import Typography from 'components/common/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Stats = ({ profile }) => {
  return (
    <Box sx={{ bgcolor: 'secondary.main', p: 2, borderRadius: 2 }}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Typography variant="h3">Stats</Typography>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="img"
            margin="10px"
            height="137px"
            src="https://stackoverflow-card.vercel.app/?userID=2927228&theme=solarizedlight"
            alt="stackoverflow stats"
            title="stackoverflow stats"
            aria-label="stackoverflow stats"
          />
          <Box
            component="img"
            margin="10px"
            height="137px"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=hidaytrahman&layout=compact"
            alt="most used language stats"
            title="most used language stats"
            aria-label="most used language stats"
          />
          <Box
            component="img"
            margin="10px"
            height="137px"
            src="https://github-readme-stats.vercel.app/api?username=hidaytrahman&theme=buefy&show_icons=true&count_private=true"
            alt="github stats"
            title="github stats"
            aria-label="github stats"
          />
          <Box
            component="img"
            margin="10px"
            height="137px"
            src="https://github-readme-stats.vercel.app/api/wakatime?username=hidaytrahman"
            alt="wakatime stats"
            title="wakatime stats"
            aria-label="wakatime stats"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Stats;
