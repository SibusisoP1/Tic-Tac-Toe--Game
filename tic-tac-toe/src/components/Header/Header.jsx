import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import {
  HeaderWrapper,
  LogoWrapper,
  LightModeIcon,
  DarkModeIcon,
} from "./Header.styled.js";
import Logo from "../../assets/svg/tic-tac-toe.svg?react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo className="logo" onClick={() => navigate("/")} />
      </LogoWrapper>
      {theme === "light" ? (
        <DarkModeIcon onClick={() => toggleTheme()} />
      ) : (
        <LightModeIcon onClick={() => toggleTheme()} />
      )}
    </HeaderWrapper>
  );
};

export default Header;
