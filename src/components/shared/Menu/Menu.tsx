import React from "react";
import styled from "styled-components";

interface NavLink {
  text: string;
  href: string;
}

interface MenuProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

const DropdownMenu = styled.nav<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  background: #000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
`;

const MenuList = styled.ul`
  position: relative;
  height: 70%;
  top: 25%;
  font-size: 6vw;
  font-family: FuturaMaxiCGBold, sans-serif;
  font-weight: 400;
  text-align: center;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 5vw;
  display: block;
  padding: 16px 24px;
`;

export const Menu: React.FC<MenuProps> = ({ navLinks, isOpen, onClose }) => {
  return (
    <DropdownMenu isOpen={isOpen}>
      <MenuList>
        {navLinks.map((link, index) => (
          <MenuLink key={index} href={link.href} onClick={onClose}>
            {link.text}
          </MenuLink>
        ))}
      </MenuList>
    </DropdownMenu>
  );
};
