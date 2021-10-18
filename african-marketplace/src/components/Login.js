import React from "react";
import axios from "axios";
// import yup

export default function Login(props) {
  const { values, change, submit, errors } = props;

  const onChange = evt => {};
  const onSubmit = evt => {
      evt.preventDefault();
    //   submit();
  };

  return (

    <form className="login-container" onSubmit={onSubmit}>
      {/* ^^^^^^ come back to the onSubmit function ^^^^^^^^ */}

      <header id="loginHeader">
        <h2>Sign In</h2>
      </header>
    <div id="loginForm" className="form">
        <div className="row"><label>Username <input name="username" placeholder="Enter your username" type="text" /></label></div>
        <div className="row"><label>Password <input name="password" placeholder="Enter your password" type="password" /></label></div>
        <div className="row"><button id="loginBtn">Login</button></div>
    </div>

    </form>
  );
}
