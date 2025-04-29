import Typography from "./common/Typography";
import { Container, StyledFooter } from "./styled/Core.styled";

const Footer = ({ profile }) => {
  return (
    <StyledFooter>
      <Container padding="0.5rem">
        <Typography variant="body3" align="center">
          All right reserved 2021 - {new Date().getFullYear()} &copy;{" "}
          {profile.name}
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
