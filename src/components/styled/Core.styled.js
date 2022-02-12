import styled, { css } from "styled-components";
import { Transition } from "./Common.styles";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.units.maxWidth};
  margin: 0 auto;
  padding: ${({ padding }) => padding};
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ bg }) => bg};
  flex-wrap: ${({ wrap }) => wrap};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const H1 = styled.h1``;

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const Badge = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 8px 12px;
  margin: ${({ theme }) => theme.units.margin};
  border-radius: ${({ theme }) => theme.units.radius};
  font-size: 14px;
`;

export const ProfileAvatar = styled.div`
  margin: ${({ theme }) => theme.units.margin};
`;

export const Link = styled.a`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryDarken};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Avatar = styled.img`
  max-width: ${({ width }) => width};
  border-radius: 50%;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const Image = styled.img`
  max-width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const Skill = styled.img`
  max-width: ${({ width }) => (width ? width : "80px")};
  margin: ${({ margin }) => (margin ? margin : "5px")};
`;

export const Box = styled.div`
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ width }) => width};
  background: ${({ bg }) => bg};
  ${({ dividerRight, theme }) =>
    dividerRight &&
    `border-right: 2px solid ${theme.colors.secondary}; margin-right: 20px; padding-right: 20px`};
  ${({ dividerLeft, theme }) =>
    dividerLeft &&
    `border-left: 2px solid  ${theme.colors.secondary}; margin-left: 20px; padding-left: 20px`};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const StyledCard = styled.div`
  max-width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ theme, padding }) => (padding ? padding : theme.units.padding)};
  background: ${({ theme, bg }) => (bg ? bg : theme.colors.card)};
  ${({ dividerRight, theme }) =>
    dividerRight &&
    `border-right: 2px solid ${theme.colors.secondary}; margin-right: 10px`};
  ${({ dividerLeft, theme }) =>
    dividerLeft &&
    `border-left: 2px solid  ${theme.colors.secondary}; margin-left: 10px`};
  border-radius: ${({ theme }) => theme.units.radius};
`;

export const ProfileCard = styled(StyledCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Transition}

  @media screen and (max-width: 922px) {
    flex-direction: column;
  }

  &:hover {
    box-shadow: 4px 7px 8px #adadad;
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }
`;

export const StyledButton = styled.button`
  padding: 8px 15px;
  font-size: 18px;
  border: 0;
  border-radius: ${({ theme }) => theme.units.radius};
  cursor: pointer;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  ${({ size }) =>
    size === "large"
      ? " font-size: 25px;"
      : size === "medium"
      ? "font-size: 20px;"
      : size === "small"
      ? "font-size: 14px;"
      : ""}

  ${({ variant, theme }) =>
    variant === "primary"
      ? `background: ${theme.colors.primary}; color: ${theme.colors.white}`
      : variant === "secondary"
      ? `background: ${theme.colors.secondary};`
      : variant === "success"
      ? `background: ${theme.colors.success};`
      : variant === "danger"
      ? `background: ${theme.colors.danger}`
      : variant === "warning"
      ? `background: ${theme.colors.warning}`
      : "color: #000;"};

  &:hover {
    background: blue;
    color: #fff;
  }
`;

export const StyledTypography = styled.div`
  font-size: 18px;
  font-weight: inherit;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: ${({ align }) => align};
  ${({ variant }) =>
    variant === "h1"
      ? "font-weight: 800; font-size: 25px;"
      : variant === "h2"
      ? "font-weight: 800; font-size: 20px;"
      : variant === "h3"
      ? "font-weight: 800; font-size: 17px;"
      : variant === "body1"
      ? "font-size: 16px;"
      : variant === "body2"
      ? "font-size: 14px;"
      : variant === "body3"
      ? "font-size: 12px;"
      : ""}
  ${({ type }) =>
    type === "primary"
      ? "color: red;"
      : type === "secondary"
      ? "color: #ccc;"
      : type === "success"
      ? "color: green;"
      : type === "danger"
      ? "color: red;"
      : type === "warning"
      ? "color: yellow;"
      : "color: #000;"};
`;

export const Alert = styled.div`
  font-weight: inherit;
  display: block;
  padding: 10px;
  width: 100%;
  text-align: center;
  background: #f6f6e3;
  margin: 10px 0;
  border-radius: ${({ theme }) => theme.units.radius};
  ${({ variant, theme }) =>
    variant === "primary"
      ? `background: ${theme.colors.primary};`
      : variant === "secondary"
      ? `background: ${theme.colors.secondary};`
      : variant === "success"
      ? `background: ${theme.colors.success};`
      : variant === "danger"
      ? `background: ${theme.colors.danger};`
      : variant === "warning"
      ? `background: ${theme.colors.warning};`
      : variant === "info"
      ? `background: ${theme.colors.info};`
      : `color: #000;`};
`;

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 1rem 0;
  border-radius: ${({ theme }) => theme.units.radius};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const Section = styled.section`
  ${({ variant, theme }) =>
    variant === "secondary" ? `background: ${theme.colors.secondary};` : ``}

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
