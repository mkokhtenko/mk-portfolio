import React from "react";
import { PromoCard, TextSection } from "../../components";
import styled from "styled-components";
import works from "../../data/works.json";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5vw;
  margin: 5vw 0;

  & > div:nth-child(3n + 1) {
    grid-column: span 2;
  }
`;

export const HomePage: React.FC = () => {
  const visibleItems = works.slice(0, 5);

  return (
    <>
      <PromoCard
        title={"building unique web."}
        images={{ default: "img/other/hero.jpg" }}
      />
      <TextSection title="details are most important">
        <p>
          Fast, stylish, convenient sites and web applications are the
          principles that underlie my work.
        </p>
        <p>
          Details - great importance in creating a truly quality product. This
          is why I do my job. This is why you are here.
        </p>
      </TextSection>
      <Layout>
        {visibleItems.map((data, index) => (
          <PromoCard
            key={index}
            link={data.link}
            title={data.title}
            images={data.images}
          />
        ))}
        <PromoCard title={"more"} link={"works"} pattern="wavy" />
      </Layout>

      <PromoCard title={"contact me"} link={"contact"} bgColor="#063e58" />
    </>
  );
};
