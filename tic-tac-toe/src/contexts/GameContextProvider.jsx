import { useState } from "react";
import { GameContext } from "./GameContext";
import { checkWinner } from "../utils/GameUtils";

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    player1: {
      choice: "X",
      name: "Prince",
    },
    player2: {
      choice: "O",
      name: "Alice",
    },
    turn: "X",
  });

  const updateBoard = (index) => {
    let updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;
    checkWinner(updatedBoard);
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "X" ? "O" : "X",
    });
  };

  return (
    <GameContext.Provider value={{ game, updateBoard }}>
      {props.children}
    </GameContext.Provider>
  );
};
