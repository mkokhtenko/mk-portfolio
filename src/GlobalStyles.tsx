import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "FuturaMaxiCGBold";
    src: url("/src/assets/fonts/FuturaMaxiCGBold.woff2") format("woff2"),
         url("/src/assets/fonts/FuturaMaxiCGBold.woff") format("woff"),
         url("/src/assets/fonts/FuturaMaxiCGBold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "FuturaMaxiBook";
    src: url("/src/assets/fonts/FuturaMaxiBook.woff2") format("woff2"),
         url("/src/assets/fonts/FuturaMaxiBook.woff") format("woff"),
         url("/src/assets/fonts/FuturaMaxiBook.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: "FuturaMaxiBook", sans-serif;
    margin: 0;
    padding: 0;
  }
`;
