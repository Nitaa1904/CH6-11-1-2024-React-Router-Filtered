import React from "react";

export const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} style={{ display: "block" }}>
      {children}
    </label>
  );
};
