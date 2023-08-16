import { useState } from "react";
import ModalContext from "./modal-context";

const ModalProvider = (props) => {
  const [modalIsShowing, setModalIsShowing] = useState(false);

  const showHandler = () => {
    setModalIsShowing(true);
  };

  const hideHandler = () => {
    setModalIsShowing(false);
  };

  const modalContext = {
    isShowing: modalIsShowing,
    show: showHandler,
    hide: hideHandler,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
