import React from "react";
import clsx from "clsx";

import classes from "./Input.module.scss";

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input ref={ref} className={clsx(classes.input, className)} {...props} />
  );
});
