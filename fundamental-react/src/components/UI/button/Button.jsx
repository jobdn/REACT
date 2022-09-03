import React from "react";
import clsx from "clsx";

import classes from "./Button.module.scss";

export const Button = React.memo(({ children, className, ...props }) => {
  return (
    <button {...props} className={clsx(classes.btn, className)}>
      {children}
    </button>
  );
});
