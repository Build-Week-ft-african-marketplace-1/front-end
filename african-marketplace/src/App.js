import { Route, Link, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router';

import AddProduct from "./components/AddProduct";
import EditProductForm from "./components/EditProductForm";
// import EditUserForm from "./components/EditUserForm";
import HomePage from "./components/HomePage";
import Login from "./components/Login/Login";
import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import ProtectedNavBar from "./components/ProtectedNavBar";
import PrivateRoute from "./components/PrivateRoute";
import ProductList from "./components/ProductList";
import SignUp from "./components/SignUp";
import ViewProduct from "./components/ViewProduct";


import './App.css';

function App() {
  
  // SHOW/HIDE ADD-PRODUCT-FORM
  const [showDiv, setShowDiv] = useState(false);
  const hide = () => {
    setShowDiv(!showDiv);
  };


  return (
    <div className="App">
      <NavBar hide={hide} />
      {/* will make this private later */}
      {/* <ProtectedNavBar /> */}

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        {/* make private */}
        <Route path="/addproduct">
          <AddProduct />
        </Route>
        {/* make private */}
        <Route path="/editproductform">
          <EditProductForm />
        </Route>
        {/* make private */}
        {/* <Route path="/edituserform">
          <EditUserForm />
        </Route> */}
        {/* make private */}
        <Route path="/productlist">
          <ProductList showDiv={showDiv} />
        </Route>
        {/* make private */}
        <Route path="/viewproduct">
          <ViewProduct />
        </Route>

      </Switch>


    </div>
  );
};

export default App;
