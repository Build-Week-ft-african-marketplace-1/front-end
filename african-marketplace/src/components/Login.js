import React, { useState } from "react";
import axios from "axios";
// import yup

const initialUserValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

export default function Login(props) {
  const { values, change, submit, errors } = props;

  const [userValues, setUserValues] = useState(initialUserValues);

  const onChange = (evt) => {
    const { name, value } = evt;
    this.setState;
  };
  const onSubmit = (evt) => {
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
        <div className="row">
          <label>
            Username{" "}
            <input
              name="username"
              placeholder="Enter your username"
              type="text"
              required
              onChange
            />
          </label>
        </div>
        <div className="row">
          <label>
            Password{" "}
            <input
              name="password"
              placeholder="Enter your password"
              type="password"
              required
              onChange
            />
          </label>
        </div>
        <div className="row">
          <button id="loginBtn">Sign In</button>
        </div>
      </div>
    </form>
  );
}
