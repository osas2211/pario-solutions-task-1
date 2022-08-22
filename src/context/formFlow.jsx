import React, { useContext, createContext, useState, useReducer, ReactNode } from "react";

export const FormFlow = createContext()
export const useFormFlow = () => {
  return useContext(FormFlow)
}

export const actions = {
  showPersonalInfo: "showPersonalInfo",
  showBillInfo: "showBillInfo",
  showConfirmPayment: "showConfirmPayment"
}

const reducer = (state, action)=>{
  switch(action.type){
    case actions.showPersonalInfo: {
      return {
        personalInfo: true, billInfo: false, confirmPayment: false
      }
    }
    case actions.showBillInfo: {
      return {
        personalInfo: false, billInfo: true, confirmPayment: false
      }
    }
    case actions.showConfirmPayment: {
      return {
        personalInfo: false, billInfo: false, confirmPayment: true
      }
    }
  }
}

export const FormFlowProvider = ({children})=>{
  const [state, dispatch] = useReducer(reducer, {personalInfo: true, billInfo: false, confirmPayment: false})

  return <FormFlow.Provider value={{state, dispatch}}>{children}</FormFlow.Provider>
}