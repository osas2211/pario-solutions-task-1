import React from "react";
import "./scss/app.scss";
import { Container } from "./components/Container";
import { Navigation } from "./components/Navigation";
import { PersonalInfo } from "./components/PersonalInfo";
import { BillInfo } from "./components/BillInfo";
import { useFormFlow } from "./context/formFlow";
import { useContext } from "react";
import { FormFlow } from "./context/formFlow";
import { ConfirmPayment } from "./components/confirmPayment";
import { Purchased } from "./components/Purchased"

function App() {
  const {state, dispatch} = useContext(FormFlow)
  return (
    <div className="App">
      <div className="top-body-bg"></div>
      <Container>
        {
          state.purchased === false ? (
            <>
              <div>
                <header className="header">Complete your Purchase</header>
                <Navigation />
              </div>
              <div>
                {state.personalInfo && <PersonalInfo />}
                {state.billInfo && <BillInfo />}
                {state.confirmPayment && <ConfirmPayment />}
              </div>
            </>
          ) : <Purchased />
        }
      </Container>
    </div>
  );
}

export default App;
