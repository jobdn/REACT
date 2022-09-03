import React from "react";
import clsx from "clsx";

import classes from "./Modal.module.scss";

export const Modal = ({ children, isShow, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(classes.modal, {
        [classes.modal_active]: isShow,
      })}
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
