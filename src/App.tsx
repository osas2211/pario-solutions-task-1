import React from 'react';
import "./scss/app.scss"
import { Container } from './components/Container';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <div className="top-body-bg"></div>
      <Container>
        <header className='header'>Complete your Purchase</header>
        <Navigation />
      </Container>
    </div>
  );
}

export default App;
