import React from "react";

export const Log = ({ title = "Component" }) => {
  const log = () => {
    console.log(title);
  };

  console.log("Log render");

  return (
    <div>
      <button onClick={log}>Click to log!</button>
    </div>
  );
};
