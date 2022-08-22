import React, { ReactNode } from "react";

export const Button: React.FC<{
  children: ReactNode;
  variant?: string;
  type: "submit" | "button" | "reset";
}> = ({ children, variant = "primary", type }) => {
  return (
    <>
      {variant === "primary" && (
        <button className="btn-primary" type={type}>{children}</button>
      )}
      {variant === "secondary" && (
        <button className="btn-secondary" type={type}>{children}</button>
      )}
    </>
  );
};
