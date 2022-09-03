import React from "react";
import clsx from "clsx";

import classes from "./Modal.module.scss";

export const Modal = ({ children, visible, setVisible, ...props }) => {
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div
      className={clsx(classes.modal, {
        [classes.modal_active]: visible,
      })}
      onClick={closeModal}
      {...props}
    >
      <div
        className={classes.modal__container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
