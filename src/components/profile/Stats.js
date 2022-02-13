import Typography from "components/common/Typography";
import { Container, Flex, Image, Section } from "components/styled/Core.styled";

const Stats = ({profile}) => {

    return <Section variant="secondary">
    <Container padding="20px">
      <Typography variant="h3">Stats</Typography>
      <Flex>
        <Image
          margin="10px"
          height="137px"
          src="https://stackoverflow-card.vercel.app/?userID=2927228&theme=solarizedlight"
        />

        <Image
          margin="10px"
          height="137px"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=hidaytrahman&layout=compact"
        />

        <Image
          margin="10px"
          height="137px"
          src="https://github-readme-stats.vercel.app/api?username=hidaytrahman&theme=buefy&show_icons=true&count_private=true"
        />
      </Flex>
    </Container>
  </Section>
}

export default Stats;