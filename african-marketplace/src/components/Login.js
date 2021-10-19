import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";


const initialUserValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

export default function Login() {
  // STATES
  const [userValues, setUserValues] = useState(initialUserValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  //EVENT HANDLERS
  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setUserValues({ ...userValues, [name]: value });
  };

  const validate = (name, value) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const validationSchema = yup.object().shape({
    username: yup.required("Username is required"),
    password: yup.required("Password is required"),
  });

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
              onChange={onChange}
            />
          </label>
          <div className="error">{formErrors.username}</div>
        </div>
        <div className="row">
          <label>
            Password{" "}
            <input
              name="password"
              placeholder="Enter your password"
              type="password"
              value={userValues.password}
              onChange={onChange}
            />
          </label>
          <div className="error">{formErrors.password}</div>
        </div>
        <div className="row">
          <button id="loginBtn" type="submit">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
