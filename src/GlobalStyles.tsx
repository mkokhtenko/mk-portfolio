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

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

button {
   	margin: 0;
	padding: 0;
	border: 0;
    background: transparent;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
