import { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalBackDrop, ModalContainer } from "./Modal.styled.js";

const ModalTemplate = () => {
  const { modalContext, modal } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <ModalBackDrop>
        <ModalContainer>{modalContext}</ModalContainer>
      </ModalBackDrop>,
      document.getElementById("modal-root"),
    );
  }
  return null;
};

export default ModalTemplate;
