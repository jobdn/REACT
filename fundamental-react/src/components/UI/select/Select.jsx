import React from "react";

export const Select = ({
  options,
  defaultTitle,
  sortValue,
  onChangeSelect,
}) => {
  return (
    <select value={sortValue} onChange={(e) => onChangeSelect(e.target.value)}>
      <option value="" disabled>
        {defaultTitle}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
