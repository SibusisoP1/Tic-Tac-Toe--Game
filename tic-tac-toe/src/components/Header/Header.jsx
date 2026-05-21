import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Logo</h1>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  );
};

export default Header;
