import classes from "./Modal.module.css";

import React from "react";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
};

export default Modal;
