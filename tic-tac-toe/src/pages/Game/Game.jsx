import { useContext } from "react";
import { Container } from "../../styles/General.styled";
import { GameBoard } from "./Game.styled.js";
import GameCell from "../../components/GameCell/GameCell.jsx";
import { GameContext } from "../../contexts/GameContext.jsx";
import Player from "../../components/Player/Player.jsx";

const Game = () => {
  const { game } = useContext(GameContext);
  console.log(game);
  return (
    <Container>
      <Player
        player={game.player1}
        isPlayerActive={game.player1.choice === game.turn}
        timeLeft={game.timeLeft}
      />
      <GameBoard>
        {game.board.map((cell, index) => (
          <GameCell
            key={index}
            CellItem={cell}
            index={index}
            isWinningCell={game.winningCombo.includes(index)}
          />
        ))}
      </GameBoard>
      <Player
        player={game.player2}
        isPlayerActive={game.player2.choice === game.turn}
        timeLeft={game.timeLeft}
      />
    </Container>
  );
};

export default Game;
