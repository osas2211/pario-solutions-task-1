import React from 'react';
import "./scss/app.scss"
import { Container } from './components/Container';
import { Navigation } from './components/Navigation';
import { PersonalInfo } from './components/PersonalInfo'

function App() {
  return (
    <div className="App">
      <div className="top-body-bg"></div>
      <Container>
        <header className='header'>Complete your Purchase</header>
        <Navigation />
        <PersonalInfo />
      </Container>
    </div>
  );
}

export default App;
