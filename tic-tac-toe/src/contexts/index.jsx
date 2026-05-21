import { ThemeContextProvider } from "./themeContextProvider.jsx";

const Provider = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default Provider;
