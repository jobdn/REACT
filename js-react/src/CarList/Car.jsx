import React from "react";

export const Car = React.memo(
  ({ onCarClick = () => {}, id, carName = "car" }) => {
    const handleCarClick = () => {
      onCarClick(id);
    };

    return (
      <div
        style={{
          padding: "10px",
          border: "1px solid #333",
          cursor: "pointer",
          margin: "10px",
          userSelect: "none",
        }}
        onClick={handleCarClick}
        className="carItem"
      >
        {carName}{" "}
        <span
          style={{
            opacity: 0.3,
          }}
        >
          (click me)
        </span>
      </div>
    );
  }
);
