import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "./styles.css"; //styles.css가 있으면 import만으로도 css가 적용됨

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);