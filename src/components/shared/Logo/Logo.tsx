import React from "react";
import styled from "styled-components";

const LogoContainer = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
`;

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      maksim <br /> kokhtenko <br /> frontend developer
    </LogoContainer>
  );
};
