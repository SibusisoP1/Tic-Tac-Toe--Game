import { ThemeContextProvider } from "./themeContextProvider.jsx";
import { GameContextProvider } from "./GameContextProvider.jsx";
import { ModalContextProvider } from "./ModalContextProvider.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { useContext } from "react";
import { ThemeContext } from "./themeContext.jsx";

const StyledThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;
  return <ThemeProvider theme={mode}>{children}</ThemeProvider>;
};

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <StyledThemeWrapper>
        <ModalContextProvider>
          <GameContextProvider>{children}</GameContextProvider>
        </ModalContextProvider>
      </StyledThemeWrapper>
    </ThemeContextProvider>
  );
};

export default Provider;
