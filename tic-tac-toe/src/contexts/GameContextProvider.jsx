import { useContext, useReducer, useEffect } from "react";
import { GameContext } from "./GameContext";
import { checkWinner } from "../utils/GameUtils";
import { ModalContext } from "./ModalContext";
import RoundOverModal from "../components/Modals/RoundOverModal/RoundOverModal";
import ModalTemplate from "../components/Modal/ModalTemplate.jsx";
import { genConfig } from "react-nice-avatar";

// Initial state
const initialGameState = {
  board: [null, null, null, null, null, null, null, null, null],
  player1: {
    choice: "X",
    name: "Player 1",
    score: 0,
    color: "#8437f9",
    avatar: genConfig(),
  },
  player2: {
    choice: "O",
    name: "Player 2",
    score: 0,
    color: "#f9c811",
    avatar: genConfig(),
  },
  turn: "X",
  roundWinner: "",
  winningCombo: [],
  timeLeft: 10,
};

// Game reducer
const gameReducer = (state, action) => {
  switch (action.type) {
    case "MAKE_MOVE": {
      const { updatedBoard, result } = action.payload;

      if (result && result !== "Draw") {
        // Someone won
        const isPlayer1Turn = state.turn === state.player1.choice;
        return {
          ...state,
          board: updatedBoard,
          [isPlayer1Turn ? "player1" : "player2"]: {
            ...(isPlayer1Turn ? state.player1 : state.player2),
            score:
              (isPlayer1Turn ? state.player1.score : state.player2.score) + 1,
          },
          roundWinner: isPlayer1Turn ? state.player1.name : state.player2.name,
          winningCombo: result,
          timeLeft: 10,
        };
      } else if (result === "Draw") {
        // Draw
        return {
          ...state,
          board: updatedBoard,
          player1: { ...state.player1, score: state.player1.score + 0.5 },
          player2: { ...state.player2, score: state.player2.score + 0.5 },
          roundWinner: "",
          winningCombo: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          timeLeft: 10,
        };
      } else {
        // Normal move
        return {
          ...state,
          board: updatedBoard,
          turn: state.turn === "X" ? "O" : "X",
          timeLeft: 10,
        };
      }
    }

    case "TICK_TIMER": {
      if (state.timeLeft > 1) {
        return { ...state, timeLeft: state.timeLeft - 1 };
      } else {
        // Time's up, switch turn
        return {
          ...state,
          turn: state.turn === "X" ? "O" : "X",
          timeLeft: 10,
        };
      }
    }

    case "SWITCH_TURN": {
      const toggleChoice = (choice) => (choice === "X" ? "O" : "X");
      return {
        ...state,
        player1: {
          ...state.player1,
          choice: toggleChoice(state.player1.choice),
        },
        player2: {
          ...state.player2,
          choice: toggleChoice(state.player2.choice),
        },
        turn: "X",
      };
    }

    case "RESET_BOARD": {
      return {
        ...state,
        board: [null, null, null, null, null, null, null, null, null],
        winningCombo: [],
        roundWinner: "",
        timeLeft: 10,
        turn: "X",
      };
    }

    case "RESTART_GAME": {
      return {
        board: [null, null, null, null, null, null, null, null, null],
        player1: {
          choice: "X",
          name: "Player 1",
          score: 0,
          color: "#8437f9",
          avatar: genConfig(),
        },
        player2: {
          choice: "O",
          name: "Player 2",
          score: 0,
          color: "#f9c811",
          avatar: genConfig(),
        },
        turn: "X",
        roundWinner: "",
        winningCombo: [],
        timeLeft: 10,
      };
    }

    default:
      return state;
  }
};

export const GameContextProvider = (props) => {
  const { handleModal } = useContext(ModalContext);
  const [game, dispatch] = useReducer(gameReducer, initialGameState);

  const updateBoard = (index) => {
    let updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;
    let result = checkWinner(updatedBoard);

    dispatch({
      type: "MAKE_MOVE",
      payload: { index, updatedBoard, result },
    });

    if (result) {
      dispatch({ type: "SWITCH_TURN" });
      setTimeout(() => {
        handleModal(<RoundOverModal />);
      }, 2000);
    }
  };

  // Timer Effect
  useEffect(() => {
    if (game.roundWinner || game.board.every((cell) => cell !== null)) {
      return; // Don't run timer when round is over or board is full
    }

    const timer = setInterval(() => {
      dispatch({ type: "TICK_TIMER" });
    }, 1000);

    return () => clearInterval(timer);
  }, [game.roundWinner, game.board, game.turn]);

  const resetBoard = () => {
    dispatch({ type: "RESET_BOARD" });
  };

  const restartGame = () => {
    dispatch({ type: "RESTART_GAME" });
  };

  return (
    <GameContext.Provider
      value={{ game, updateBoard, resetBoard, restartGame }}
    >
      <ModalTemplate />
      {props.children}
    </GameContext.Provider>
  );
};
