import React from "react";
import { PromoCard } from "../../components";
import styled from "styled-components";

const showcaseItems = [
  {
    link: "slotegrator",
    title: "slotegrator",
    bgImage: "img/slotegrator.jpg",
  },
  {
    link: "galleria",
    title: "thegalleria",
    bgImage: "img/galleria-main.jpg",
  },
  {
    link: "watch1010",
    title: "watch1010",
    bgImage:
      "/img/watch1010.jpg",
  },
  {
    link: "overbetting",
    title: "overbetting",
    bgImage:
      "https://www.esquireme.com/public/images/2017/10/08/Paul-Pogba-Esquire-4.jpg",
  },
  {
    link: "choithrams",
    title: "choithrams",
    bgImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assorted-fruit-in-bowl-royalty-free-image-903846026-1545573737.jpg",
  },
  {
    link: "nuclearo",
    title: "nuclearo",
    bgImage:
      "https://i.pinimg.com/originals/0f/4c/9e/0f4c9e22ca91605824039e823bfee83a.jpg",
  },
  {
    title: "contact me",
    bgImage:
      "https://i.pinimg.com/originals/0f/4c/9e/0f4c9e22ca91605824039e823bfee83a.jpg",
  },
];


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
  return (
    <>
      <PromoCard title={"building unique web."} bgImage={"/img/hero.jpg"} />
      <Layout>
        {showcaseItems.map((data, index) => (
          <PromoCard
            key={index}
            link={data.link}
            title={data.title}
            bgImage={data.bgImage}
          />
        ))}
      </Layout>
    </>
  );
};
