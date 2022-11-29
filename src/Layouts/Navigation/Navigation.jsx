import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.2);
    text-decoration: underline;
    text-decoration-color: white;
  }
`;

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </Menu>
        <Button text="Connect Wallet" link="https://google.com" />
      </NavBar>
    </Section>
  );
};

export default Navigation;
