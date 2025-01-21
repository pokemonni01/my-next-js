import classes from "./Modal.module.css";

import React from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = (props: ModalProps) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
