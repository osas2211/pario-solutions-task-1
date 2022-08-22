import React from "react";
import { useFormFlow } from "../context/formFlow"

export const Navigation = () => {

  const {state, dispatch} = useFormFlow()
  return (
    <nav className="nav">
      <div className={`nav-item ${state.personalInfo && "active"}`}>Personal Info</div>

      <div className={`nav-item ${state.billInfo && "active"}`}>Billing Info</div>

      <div className={`nav-item ${state.confirmPayment && "active"}`}>Confirm Payment</div>
    </nav>
  );
};
