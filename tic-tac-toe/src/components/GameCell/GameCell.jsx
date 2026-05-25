import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { useContext } from "react";
import IconO from "../../assets/svg/icon-o.svg?react";
import OIconoutline from "../../assets/svg/icon-o-outline.svg?react";
import IconX from "../../assets/svg/icon-x.svg?react";
import XIconOutline from "../../assets/svg/icon-x-outline.svg?react";

const GameCell = ({ CellItem, index, isWinningCell }) => {
  const { updateBoard, game } = useContext(GameContext);

  const CellClickHandler = () => {
    updateBoard(index);
  };

  if (CellItem === "X") {
    return (
      <CellStyle $isWinningCell={isWinningCell ?? false}>
        <IconX className="markedItem" />
      </CellStyle>
    );
  } else if (CellItem === "O") {
    return (
      <CellStyle $isWinningCell={isWinningCell ?? false}>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={CellClickHandler}>
      {game.turn === "X" ? (
        <XIconOutline className="outlineIcon" />
      ) : (
        <OIconoutline className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
