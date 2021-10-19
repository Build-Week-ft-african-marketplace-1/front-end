
import { Route, Link, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router';

import AddProduct from "./components/AddProduct";
import EditProductForm from "./components/EditProductForm";
import EditUserForm from "./components/EditUserForm";
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
  return (
    <div className="App">
      <NavBar />
      {/* will make this private later */}
      <ProtectedNavBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        {<Route exact path="/signup">
          <SignUp />
        </Route>}
        {/* make private */}
        <Route path="/addproduct">
          <AddProduct />
        </Route>
        {/* make private */}
        <Route path="/editproductform">
          <EditProductForm />
        </Route>
        {/* make private */}
        <Route path="/edituserform">
          <EditUserForm />
        </Route>
        {/* make private */}
        <Route path="/productlist">
          <ProductList />
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
