import React, { useContext, createContext, useReducer } from "react";

export const FormFlow = createContext()
export const useFormFlow = () => {
  return useContext(FormFlow)
}

export const actions = {
  showPersonalInfo: "showPersonalInfo",
  showBillInfo: "showBillInfo",
  showConfirmPayment: "showConfirmPayment",
  purchased: "purchased"
}

const reducer = (state, action)=>{
  switch(action.type){
    case actions.showPersonalInfo: {
      return {
        personalInfo: true, billInfo: false, confirmPayment: false, purchased: false
      }
    }
    case actions.showBillInfo: {
      return {
        personalInfo: false, billInfo: true, confirmPayment: false, purchased: false
      }
    }
    case actions.showConfirmPayment: {
      return {
        personalInfo: false, billInfo: false, confirmPayment: true, purchased: false
      }
    }
    case actions.purchased:{
      return {
        personalInfo: false, billInfo: false, confirmPayment: false, purchased: true
      }
    }
  }
}

export const FormFlowProvider = ({children})=>{
  const [state, dispatch] = useReducer(reducer, {personalInfo: true, billInfo: false, confirmPayment: false, purchased: false})

  return <FormFlow.Provider value={{state, dispatch}}>{children}</FormFlow.Provider>
}