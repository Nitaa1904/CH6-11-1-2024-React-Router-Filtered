import React from "react";

export const AuthLayout = ({ title, children }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          Welcome back, please enter your <details>login details</details>
        </p>
      </div>
      {children}
    </div>
  );
};
