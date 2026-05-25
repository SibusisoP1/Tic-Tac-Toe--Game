import { useState } from "react";

export const useModals = () => {
  const [modal, setModal] = useState(false);
  const [modalContext, setModalContext] = useState("Iam a modal");

  const handleModal = (context = false) => {
    setModal(!modal);
    if (context) {
      setModalContext(context);
    }
  };

  return { modal, handleModal, modalContext };
};
