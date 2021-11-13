import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/style.scss';
import {ControlState} from './context/control/ControlState';

ReactDOM.render(
  <React.StrictMode>
    <ControlState>
      <App />
    </ControlState>
  </React.StrictMode>,
  document.getElementById('root')
);
