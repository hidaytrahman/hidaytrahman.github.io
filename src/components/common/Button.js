import { Badge, Link, StyledButton } from "../styled/Core.styled";

const Button = ({ children, link, margin, onClick, size, variant }) => {
  return (
    <>
      <StyledButton
        margin={margin}
        onClick={onClick}
        size={size}
        variant={variant}
      >
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
