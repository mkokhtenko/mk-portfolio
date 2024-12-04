import React from "react";
import { PromoCard } from "../../components";
import styled from "styled-components";
import works from "../../data/works.json";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5vw;
  margin: 0 0 5vw;

  & > div:nth-child(3n + 1) {
    grid-column: span 2;
  }
`;

export const WorksPage: React.FC = () => {
  const reversedWorks = [...works].reverse();

  return (
    <>
      <Layout>
        {reversedWorks.map((data, index) => (
          <PromoCard
            key={index}
            link={data.link}
            title={data.title}
            images={data.images}
          />
        ))}
      </Layout>

      <PromoCard title={"contact me"} bgColor="#063e58" />
    </>
  );
};
