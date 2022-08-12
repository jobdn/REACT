import React from "react";

export const Button = ({ btnLabel, ...props }) => {
  return <button {...props}>{btnLabel}</button>;
};
