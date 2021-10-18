import React, { useState } from "react";
import axios from "axios";

const initialUserValues = {
  username: "",
  password: "",
};

export default function Login() {
  

  const [userValues, setUserValues] = useState(initialUserValues);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setUserValues({...userValues, [name]: value});
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
              value={userValues.username}
              required
              onChange={onChange}
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
              value={userValues.password}
              required
              onChange={onChange}
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
