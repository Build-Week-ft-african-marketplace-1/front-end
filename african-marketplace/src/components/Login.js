import React, { useState } from "react";
import * as yup from "yup";
import loginSchema from "../validation/loginSchema";
import { useHistory } from "react-router-dom";
import axios from "axios"; //need this??

import '../components/login.css';


//INITIAL VALUES
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

  // EVENT HANDLERS
  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setUserValues({ ...userValues, [name]: value });
  };

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    //   submit() authentication
    // history.push("/marketplace");
  };

  const history = useHistory();


  // CREATE A FORM INPUT ** not used, onchange is not working
  // const FormInput = props => (
  //   <div class="row">
  //     <label>{props.description}</label>
  //     <input name={props.name} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
  //   </div>  
  // );

  return (
    <form className="login-container" onSubmit={onSubmit}>
      {/* ^^^^^^ come back to the onSubmit function ^^^^^^^^ */}

      <header className="loginHeader">Sign In</header>

      <div id="loginForm" className="form">
        <div className="row">
          <label>
            Username</label>
            <input
              name="username"
              placeholder="Enter your username"
              type="text"
              value={userValues.username}
              onChange={onChange}
            />
           </div>
          {/* <FormInput description="Username" name="username" type="text" placeholder="Enter your username" value={userValues.username} /> */}
          <div className="error">{formErrors.username}</div>

        <div className="row">
          <label>
            Password</label>
            <input
              name="password"
              placeholder="Enter your password"
              type="password"
              value={userValues.password}
              onChange={onChange}
            />
           </div>
          {/* <FormInput description="Password" name="password" type="password" placeholder="Enter your password" value={userValues.password} onChange={onChange} /> */}
          <div className="error">{formErrors.password}</div>
        
        <div className="row">
          <button id="loginBtn" type="submit">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
}
