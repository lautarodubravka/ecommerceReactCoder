import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

