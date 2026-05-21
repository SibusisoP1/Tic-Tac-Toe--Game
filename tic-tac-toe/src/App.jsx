import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme.js";
import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext.jsx";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
