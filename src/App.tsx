import { useState } from "react";
import { Route, Routes } from "react-router";
import { Footer } from "./components/";
import { Header } from "./components/";
import { Menu } from "./components/";
import { HomePage, WorksPage, AboutPage, ContactPage } from "./pages/";
import { DynamicPages } from "./components/";
import dynamicPageData from "./data/works.json";
import styled from "styled-components";

const Page = styled.div`
  padding: 5.1vw 5.1vw 0;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media only screen and (max-width: 480px) {
    padding: 0;
  }
`;

const navLinks = [
  { text: "home", href: "/", component: <HomePage /> },
  { text: "work", href: "/works", component: <WorksPage /> },
  { text: "about", href: "/about", component: <AboutPage /> },
  { text: "contact", href: "/contact", component: <ContactPage /> },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Page>
      <Header toggleMenu={toggleMenu} />
      <Menu navLinks={navLinks} isOpen={isMenuOpen} onClose={closeMenu} />
      <Routes>
        {navLinks.map((link, index) => (
          <Route key={index} path={link.href} element={link.component} />
        ))}

        {dynamicPageData.map((page, index) => (
          <Route
            key={`dynamic-${index}`}
            path={`/${page.link}`}
            element={
              <DynamicPages
                title={page.title}
                images={page.images} // Остается неизменным
                galleryImages={page.galleryImages} // Новый массив изображений для галереи
                link={page.link}
                moto={page.moto}
                project={page.project}
                description={page.description}
              />
            }
          />
        ))}
      </Routes>
      <Footer navLinks={navLinks} />
    </Page>
  );
}
