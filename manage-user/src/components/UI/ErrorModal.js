import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

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

const BackDrop = (props) => {
  return (
    <BackdropPortal>
      <div className={classes.backdrop} onClick={props.errorConfirm}></div>
    </BackdropPortal>
  );
};

const ErrorModalOverLay = (props) => {
  return (
    <ModalPortal>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p> {props.message}</p>
        </div>
        <footer className={`${classes.footer} ${classes.actions}`}>
          <Button onClick={props.errorConfirm}>Okay</Button>
        </footer>
      </Card>
    </ModalPortal>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      <BackDrop errorConfirm={props.errorConfirm} />
      <ErrorModalOverLay title={props.title} message={props.message} errorConfirm={props.errorConfirm}/>
    </>
  );
};

export default ErrorModal;
