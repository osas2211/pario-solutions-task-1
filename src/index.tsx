import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormFlowProvider } from './context/formFlow';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormFlowProvider>
      <App />
    </FormFlowProvider>
  </React.StrictMode>
);

