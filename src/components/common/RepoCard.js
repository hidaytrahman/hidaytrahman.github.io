import {
  Badge,
  Flex,
  Link,
  StyledButton,
  StyledCard,
} from "../styled/Core.styled";
import Button from "./Button";
import Typography from "./Typography";

const RepoCard = ({ children, item, width, padding, bg, margin }) => {
  return (
    <>
      <StyledCard width={width} padding={padding} bg={bg} margin={margin}>
        <header>
          <Typography variant="body1" margin="10px 0">
            {item.name.replace("-", " ").toUpperCase()}
          </Typography>
          <Typography variant="body2">{item.description}</Typography>
        </header>

        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          margin="20px 0 0 0"
        >
          {item.homepage && (
            <Link href={item.homepage} target="_blank" variant="primary">
              View
            </Link>
          )}

          {item.html_url && (
            <Link href={item.html_url} target="_blank" variant="secondary">
              Github
            </Link>
          )}
        </Flex>
      </StyledCard>
    </>
  );
};

export default RepoCard;
