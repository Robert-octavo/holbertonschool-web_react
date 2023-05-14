import logo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';
import React from 'react';

import Header from '../Header/Header';

const year = getFullYear();
const footer = getFooterCopy(true);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button type="button">OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {year} - {footer}</p>
      </footer>
    </div>
  );
}

export default App;
