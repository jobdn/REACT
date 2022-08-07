import React from "react";

export const MemoLog = ({ title = "Component" }) => {
  const log = React.useCallback(() => {
    console.log(title);
  }, [title]);

  return (
    <div>
      <button onClick={log}>Click to log!</button>
    </div>
  );
};
