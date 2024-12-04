import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import themes from "./data/themes.json";

function useTheme() {
  const location = useLocation();
  return useMemo(() => {
    switch (location.pathname) {
      case "/works":
        return themes.dark;
      default:
        return themes.light;
    }
  }, [location.pathname]);
}

function Root() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>
);
