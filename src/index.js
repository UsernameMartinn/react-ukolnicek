import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NovyUkol from './NovyUkol';
import Ukolnicek from './Ukolnicek';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Ukolnicek />
  </React.StrictMode>
);