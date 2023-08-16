import React from "react";

const ModalContext = React.createContext({
  isShowing: null,
  show: () => {},
  hide: () => {},
});

export default ModalContext;
