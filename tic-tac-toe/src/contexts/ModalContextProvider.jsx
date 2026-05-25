import { useModals } from "../hooks/useModals.jsx";
import { ModalContext } from "./ModalContext.jsx";

export const ModalContextProvider = ({ children }) => {
  const { modal, handleModal, modalContext } = useModals();

  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContext }}>
      {children}
    </ModalContext.Provider>
  );
};
