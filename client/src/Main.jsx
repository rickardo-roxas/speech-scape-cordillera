// Libraries and dependencies
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/Styles.css";

import App from './App.jsx';

/**
 * Main entry point for the React application.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
