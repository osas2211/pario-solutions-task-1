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

function App() {
  const [personalInfo, setPersonalInfo] = React.useState<Boolean>(true);
  const [billInfo, setBillInfo] = React.useState<Boolean>(false);
  const [confirmPayment, setConfirmPayment] = React.useState<Boolean>(false);
  const {state, dispatch} = useContext(FormFlow)
  return (
    <div className="App">
      <div className="top-body-bg"></div>
      <Container>
        <div>
          <header className="header">Complete your Purchase</header>
          <Navigation
            personalInfo={personalInfo}
            billInfo={billInfo}
            confirmPayment={confirmPayment}
            setPersonalInfo={setPersonalInfo}
            setBillInfo={setBillInfo}
            setConfirmPayment={setConfirmPayment}
          />
        </div>
        <div>
          {state.personalInfo && <PersonalInfo />}
          {state.billInfo && <BillInfo />}
          { state.confirmPayment && <ConfirmPayment /> }
        </div>
      </Container>
    </div>
  );
}

export default App;
