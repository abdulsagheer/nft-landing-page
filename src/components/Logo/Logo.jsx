import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: ${(props) => props.theme.fontxxxl};

  a {
    text-decoration: none;
  }

  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">NFT</Link>
    </LogoText>
  );
};

export default Logo;
