import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import ModalContext from "../../store/modal/modal-context";
import { useContext } from "react";

// backdrop
const Backdrop = (props) => {
  const modalCtx = useContext(ModalContext);
  return <div className={classes.backdrop} onClick={modalCtx.hide} />;
};

// modal overlay
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
