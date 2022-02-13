import { Badge, Link, StyledButton, StyledCard } from "../styled/Core.styled";

const Card = ({ children, width, padding }) => {
  return (
    <>
      <StyledCard width={width} padding={padding}>
        {children}
      </StyledCard>
    </>
  );
};

export default Card;
