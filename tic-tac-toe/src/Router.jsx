import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";
import Game from "./pages/Game/Game.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/game-on" element={<Game />} />
    </Routes>
  );
};

export default Router;
