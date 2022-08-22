import React, { ReactNode } from "react";

export const Button: React.FC<{
  children: ReactNode;
  variant?: string;
  onClick?: Function
  type: "submit" | "button" | "reset";
}> = ({ children, variant = "primary", type,  onClick }) => {
  return (
    <>
      {variant === "primary" && (
        <button className="btn-primary" type={type} onClick={()=>{
          onClick && onClick()
        }}>{children}</button>
      )}
      {variant === "secondary" && (
        <button className="btn-secondary" type={type} onClick={()=> window.location.reload()}>{children}</button>
      )}
    </>
  );
};
