import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo/Logo";

const FooterContainer = styled.footer`
  margin-top: 5vw;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Nav = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 8px;
  list-style: none;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  font-family: FuturaMaxiCGBold;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;

interface FooterProps {
  navLinks: { text: string; href: string }[];
}

export const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  const socialLinks = [
    {
      text: "linkedin",
      href: "https://www.linkedin.com/in/maksim-kokhtenko-258299209/",
    },
    { text: "github", href: "https://github.com/mkokhtenko" },
    { text: "codepen", href: "https://codepen.io/MaksimKokhtenko" },
    { text: "contact", href: "#" },
  ];

  const contactLinks = [
    { text: "maxkohtenko@gmail.com", href: "mailto:maxkohtenko@gmail.com" },
    { text: "telegram", href: "https://t.me/mmkdev" },
  ];

  return (
    <FooterContainer>
      <Logo />
      <Nav>
        {navLinks.map((link, index) => (
          <NavItem key={index}>
            <NavLink href={link.href}>{link.text}</NavLink>
          </NavItem>
        ))}
      </Nav>
      <Nav>
        {socialLinks.map((link, index) => (
          <NavItem key={index}>
            <NavLink href={link.href} target="_blank">
              {link.text}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <Nav>
        {contactLinks.map((link, index) => (
          <NavItem key={index}>
            <NavLink href={link.href}>{link.text}</NavLink>
          </NavItem>
        ))}
      </Nav>
    </FooterContainer>
  );
};
