import React from "react";
import axios from "axios";
// import yup

export default function Login(props) {
  const { values, change, submit, errors } = props;

  const onSubmit = (e) => {
  };

  return (
    <form className="login-container" onSubmit={onSubmit}>
      {/* ^^^^^^ come back to the onSubmit function ^^^^^^^^ */}
      <header id="loginHeader">
        <h2>Login</h2>
      </header>
    <div id="loginForm" className="form">
        <input description="Username" placeholder="Enter your username" type="text" />
        <input description="Password" placeholder="Enter your password" type="password" />
        <button id="loginBtn">Login</button>
    </div>

    </form>
  );
}
