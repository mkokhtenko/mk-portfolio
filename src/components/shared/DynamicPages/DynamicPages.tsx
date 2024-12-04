import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { PromoCard } from "../PromoCard/PromoCard";
import { Gallery } from "../Gallery/Gallery";
import themes from "../../../data/themes.json";
import { TextSection } from "../TextSection/TextSection";

interface DescriptionItem {
  type: "text";
  content: string;
}

interface ImageItem {
  jpg: string;
  webp: string;
}

interface DynamicPageProps {
  title: string;
  images: {
    default: string;
    webp: string;
    alternative?: string;
    "alternative-webp"?: string;
  };
  galleryImages?: ImageItem[];
  link: string;
  theme?: keyof typeof themes;
  moto: string;
  description: DescriptionItem[];
  project?: string;
}

const PageContainer = styled.div`
  display: grid;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-family: FuturaMaxiCGBold;
  color: ${(props) => props.theme.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const DynamicPages: React.FC<DynamicPageProps> = ({
  title,
  images,
  galleryImages,
  theme,
  moto,
  description,
  project,
}) => {

  const selectedTheme = themes[theme || "light"];

  return (
    <ThemeProvider theme={selectedTheme}>
      <PageContainer>
        <PromoCard images={{ default: images.default }} title={title} />

        <TextSection title={moto}>
          {description.map((item, index) => (
            <p key={index}>{item.content}</p>
          ))}
          {project && (
            <ProjectLink
              href={project}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the case
            </ProjectLink>
          )}
        </TextSection>

        {galleryImages && <Gallery images={galleryImages} />}
      </PageContainer>
    </ThemeProvider>
  );
};
