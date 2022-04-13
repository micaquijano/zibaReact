import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import reportWebVitals from './reportWebVitals';
import './style.css'
import { Route } from 'react-router-dom';
import { Carrusel } from './componentes/Carrusel';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const index = () => {
  return (
    <Route exact path="/Carrusel.js" element={<Carrusel/>}></Route>
  )
}

  

