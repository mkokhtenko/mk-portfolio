import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled(Link)`
  font-family: FuturaMaxiCGBold;
  font-size: 24px;
  line-height: 1.2;
  float: left;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`;

export const Logo: React.FC = () => {
  return (
    <LogoContainer to="/">
      maksim <br /> kokhtenko <br /> frontend developer
    </LogoContainer>
  );
};
