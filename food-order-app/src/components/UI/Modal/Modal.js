import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackdropPortal = (props) => {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("backdrop-root")
  );
};

const ModalPortal = (props) => {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById("modal-root")
  );
};

const Backdrop = (props) => {
  return (
    <BackdropPortal>
      <div className={classes.backdrop} onClick={props.onClose}></div>
    </BackdropPortal>
  );
};

const ModalOverLay = (props) => {
  return (
    <ModalPortal>
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    </ModalPortal>
  );
};
const Modal = (props) => {
  return (
    <>
      <Backdrop errorConfirm={props.errorConfirm} onClose={props.onClose}/>
      <ModalOverLay
        title={props.title}
        message={props.message}
        errorConfirm={props.errorConfirm}>{props.children}</ModalOverLay>
    </>
  );
};

export default Modal;
