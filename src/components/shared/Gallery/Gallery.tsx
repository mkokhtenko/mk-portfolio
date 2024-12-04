import React from "react";
import styled from "styled-components";

interface GalleryProps {
  images: { jpg: string; webp: string }[];
}

const GalleryContainer = styled.div`
  display: grid;
  gap: 5vw;
`;

const ImageWrapper = styled.picture`
  display: block;
  max-width: 100%;
  padding: 5vw;
  background-color: #f2f2f2;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          <source srcSet={image.webp} type="image/webp" />
          <img src={image.jpg} alt={`Gallery image ${index + 1}`} />
        </ImageWrapper>
      ))}
    </GalleryContainer>
  );
};
