import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../../Modal/Modal.styled";
import Button from "../../Button/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../../contexts/ModalContext";
import { GameContext } from "../../../contexts/GameContext";

const RoundOverModal = () => {
  const { handleModal } = useContext(ModalContext);
  const { resetBoard, game, restartGame } = useContext(GameContext);

  const navigate = useNavigate();
  return (
    <>
      <ModalHeader>
        <Title $primary>
          {game.roundWinner ? `${game.roundWinner} wins Round` : "Round Draw"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle $primary>Choices will be switched</Subtitle>
        <Subtitle $primary>
          {game.player1.name}: {game.player1.score}
        </Subtitle>
        <Subtitle $primary>
          {game.player2.name}: {game.player2.score}
        </Subtitle>{" "}
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </Button>
        <Button
          color="#8437f9"
          onClick={() => {
            handleModal();
            restartGame();
            navigate("/");
          }}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
};

export default RoundOverModal;
