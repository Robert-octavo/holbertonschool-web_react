import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button type="button">OK</button>
      </div>
    </div>
  );
};

export default Login;
