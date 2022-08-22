import React from "react";
import { useFormFlow } from "../context/formFlow"

interface NavigationInterface {
  setPersonalInfo: Function;
  setBillInfo: Function;
  setConfirmPayment: Function;
  personalInfo: Boolean
  billInfo: Boolean
  confirmPayment: Boolean
}

export const Navigation: React.FC<NavigationInterface> = ({
  setPersonalInfo,
  setBillInfo,
  setConfirmPayment,
  personalInfo,
  billInfo,
  confirmPayment
 
}) => {

  const {state, dispatch} = useFormFlow()
  return (
    <nav className="nav">
      <div className={`nav-item ${state.personalInfo && "active"}`} onClick={()=>{
        if (personalInfo === true) setPersonalInfo(false)
        else{
          setPersonalInfo(true)
          setBillInfo(false)
          setConfirmPayment(false)
        }
      }}>Personal Info</div>

      <div className={`nav-item ${state.billInfo && "active"}`} onClick={()=>{
        if (billInfo === true) setBillInfo(false)
        else{
          setPersonalInfo(false)
          setBillInfo(true)
          setConfirmPayment(false)
        }
      }}>Billing Info</div>

      <div className={`nav-item ${state.confirmPayment && "active"}`} onClick={()=>{
        if (confirmPayment === true) setConfirmPayment(false)
        else{
          setPersonalInfo(false)
          setBillInfo(false)
          setConfirmPayment(true)
        }
      }}>Confirm Payment</div>
    </nav>
  );
};
