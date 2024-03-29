import React from "react";

import classes from "./Select.module.scss";

export const Select = ({ options, defaultTitle, selectValue, onChange }) => {
  return (
    <select
      value={selectValue}
      onChange={(e) => onChange(e.target.value)}
      className={classes.select}
    >
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
