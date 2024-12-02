import { Footer } from "./components";
import { Header } from "./components";
import { HomePage } from "./pages/";
import styled from "styled-components";

const Page = styled.div`
  padding: 5.1vw 5.1vw 0;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

export default function App() {
  return (
    <Page>
      <Header />
        <HomePage />
      <Footer />
    </Page>
  );
}
