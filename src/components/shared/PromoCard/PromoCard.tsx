import React from "react";
import styled from "styled-components";

interface PromoCardProps {
  link?: string;
  title: string;
  bgImage: string;
}

const CardContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div<{ bgImage: string }>`
  position: relative;
  background-size: cover;
  background-position: center;
  -webkit-transition: all 5s ease;
  transition: all 5s ease;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: grey;
  background-image: url(${(props) => props.bgImage});
`;

const Link = styled.a`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: FuturaMaxiCGBold, sans-serif;
  font-size: 5vw;
  color: #fff;
  line-height: 1.2;
  z-index: 2;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const Text = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: FuturaMaxiCGBold, sans-serif;
  font-size: 5vw;
  color: #fff;
  line-height: 1.2;
  z-index: 2;
`;

export const PromoCard: React.FC<PromoCardProps> = ({ link, title, bgImage }) => {
  return (
    <CardContainer>
      <Background bgImage={bgImage} />
      {link ? <Link href={link}>{title}</Link> : <Text>{title}</Text>}
    </CardContainer>
  );
};
