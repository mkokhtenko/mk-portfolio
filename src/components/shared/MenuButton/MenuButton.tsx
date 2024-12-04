import React from "react";
import styled from "styled-components";

interface MenuButtonProps {
  onClick: () => void;
}

const StyledMenuButton = styled.button`
  font-family: FuturaMaxiCGBold;
  font-size: 24px;
  line-height: 1;
  float: right;
  color: ${(props) => props.theme.text};
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
`;

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return <StyledMenuButton onClick={onClick}>Menu</StyledMenuButton>;
};
