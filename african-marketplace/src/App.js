
import { Route, Link, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from 'react-router';

import AddProduct from "./components/AddProduct";
import EditProductForm from "./components/EditProductForm";
import EditUserForm from "./components/EditUserForm";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
//import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import ProductList from "./components/ProductList";
//import SignUp from "./components/SignUp";
//import ViewProduct from "./components/ViewProduct";


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* <Route exact path="/logout">
          <Logout />
        </Route> */}
        {/* <Route exact path="/singup">
          <SignUp />
        </Route> */}
        <PrivateRoute path="/addproducts">
          <AddProduct />
        </PrivateRoute>
        <PrivateRoute path="/editproductform">
          <EditProductForm />
        </PrivateRoute>
        <PrivateRoute path="/edituserform">
          <EditUserForm />
        </PrivateRoute>
        <PrivateRoute path="/addproducts">
          <AddProduct />
        </PrivateRoute>
        <PrivateRoute path="/productlist">
          <ProductList />
        </PrivateRoute>
        {/* <PrivateRoute path="/viewproduct">
          <ViewProducts />
        </PrivateRoute> */}

      </Switch>


    </div>
  );
};

export default App;
