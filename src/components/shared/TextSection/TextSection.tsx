import React from "react";
import styled from "styled-components";

interface TextSectionProps {
  title?: string;
  isSmall?: boolean;
  children: React.ReactNode;
}

const TextContainer = styled.div`
  padding: 5vw 3vw;
  font-size: 1.5vw;
  max-width: 85%;
  line-height: 1.75;
  color: ${(props) => props.theme.text};
  font-family: FuturaMaxiBook, sans-serif;

  @media only screen and (max-width: 480px) {
    padding: 8.1vw 5.1vw;
  }
`;

const Title = styled.h2<{ isSmall?: boolean }>`
  font-size: ${(props) => (props.isSmall ? "2vw" : "6vw")};
  line-height: 1.2;
  font-family: FuturaMaxiCGBold, sans-serif;
  font-weight: 800;
  margin: 0 0 5.1vw;

  @media only screen and (max-width: 480px) {
    font-size: ${(props) => (props.isSmall ? "4vw" : "8vw")};
  }
`;

export const TextSection: React.FC<TextSectionProps> = ({
  title,
  isSmall,
  children,
}) => {
  return (
    <TextContainer>
      <Title isSmall={isSmall}>{title}</Title>
      {children}
    </TextContainer>
  );
};
