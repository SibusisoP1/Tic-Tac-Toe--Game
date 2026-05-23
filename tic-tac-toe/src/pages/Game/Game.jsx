import { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoard } from "./Game.styled.js";
import GameCell from "../../components/GameCell/GameCell.jsx";
import { GameContext } from "../../contexts/GameContext.jsx";

const Game = () => {
  const { game } = useContext(GameContext);
  return (
    <Container>
      <GameBoard>
        {game.board.map((cell, index) => (
          <GameCell key={index} CellItem={cell} index={index} />
        ))}
      </GameBoard>
    </Container>
  );
};

export default Game;
