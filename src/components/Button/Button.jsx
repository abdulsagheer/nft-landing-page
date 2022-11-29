import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  background-color: ${(props) => props.theme.text};
  a {
    color: ${(props) => props.theme.body};
    text-decoration: none;
  }
  border-radius: 20px;
  padding: 10px 20px;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontsm};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
    border: 2px solid ${(props) => props.theme.text};
  }
`;

const Button = ({ text, link }) => {
  return (
    <Btn>
      <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </Btn>
  );
};

export default Button;
