import './App.css';
import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
