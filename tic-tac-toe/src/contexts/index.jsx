import { ThemeContextProvider } from "./themeContextProvider.jsx";
import { GameContextProvider } from "./GameContextProvider.jsx";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
