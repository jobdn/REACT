import React from "react";

import classes from "./Button.module.scss";

export const Button = React.memo(({ children, ...props }) => {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
});
