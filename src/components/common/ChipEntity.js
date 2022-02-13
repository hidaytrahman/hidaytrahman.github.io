import { Badge, Link } from "../styled/Core.styled";

const ChipEntity = ({ children, link }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <Badge>{children}</Badge>
        </Link>
      ) : (
        <Badge>{children}</Badge>
      )}
    </>
  );
};

export default ChipEntity;
