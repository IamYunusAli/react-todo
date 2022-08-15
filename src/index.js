import React from 'react';
import ReactDOM from 'react-dom/client';
import './functionbased/App.css';
import { BrowserRouter } from 'react-router-dom';
import App from './functionbased/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
