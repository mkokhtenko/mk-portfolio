import React from "react";
import styled from "styled-components";

interface PromoCardProps {
  link?: string;
  title: string;
  images?: {
    default: string;
    webp?: string;
  };
  bgColor?: string;
  pattern?: string;
}

const CardContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundPicture = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Background = styled.div<{ bgColor?: string; pattern?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor || "grey"};
  ${(props) =>
    props.pattern === "wavy" &&
    `
      background-color: #e5e5f7;
      opacity: 0.6;
      background-image: repeating-radial-gradient(
          circle at 0 0,
          transparent 0,
          #e5e5f7 40px
        ),
        repeating-linear-gradient(#00000055, #000000);
    `}
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

export const PromoCard: React.FC<PromoCardProps> = ({
  link,
  title,
  images,
  bgColor,
  pattern,
}) => {
  return (
    <CardContainer>
      {images ? (
        <BackgroundPicture>
          {images.webp && <source srcSet={images.webp} type="image/webp" />}
          <img src={images.default} alt={title} />
        </BackgroundPicture>
      ) : (
        <Background bgColor={bgColor} pattern={pattern} />
      )}
      {link ? <Link href={link}>{title}</Link> : <Text>{title}</Text>}
    </CardContainer>
  );
};
