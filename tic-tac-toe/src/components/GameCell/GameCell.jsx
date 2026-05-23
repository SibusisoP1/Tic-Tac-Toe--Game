import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { useContext } from "react";

const GameCell = ({ CellItem, index }) => {
  const { updateBoard } = useContext(GameContext);

  const CellClickHandler = () => {
    updateBoard(index);
    // if (result) {
    // }
  };

  return <CellStyle onClick={CellClickHandler}>{CellItem}</CellStyle>;
};

export default GameCell;
