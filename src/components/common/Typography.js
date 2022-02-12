import { StyledTypography } from "../styled/Core.styled";

const Typography = ({ children, margin, variant, type, align }) => {
  return (
    <>
      <StyledTypography
        margin={margin}
        variant={variant}
        type={type}
        align={align}
      >
        {children}
      </StyledTypography>
    </>
  );
};

export default Typography;
