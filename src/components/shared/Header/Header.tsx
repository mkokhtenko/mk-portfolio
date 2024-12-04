import React from "react";
import { Logo } from "../Logo/Logo";
import { MenuButton } from "../MenuButton/MenuButton";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 2px;
  height: 10vw;
  padding: 0 3.1vw;
  width: 83.6vw;
  z-index: 2;
`;

interface HeaderProps {
  toggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <HeaderContainer>
      <Logo />
      <MenuButton onClick={toggleMenu} />
    </HeaderContainer>
  );
};
