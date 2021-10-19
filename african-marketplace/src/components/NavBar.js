import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = () => {



return (
    <div className="nav-header">
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>
                <Link to="/signup">Sign Up</Link>

                <Link to="/addproduct">Add Product</Link>
                <Link to="/editproductform">Edit Product</Link>
                <Link to="/edituserform">Edit User Form</Link>
                <Link to="/productlist">Product List</Link>
                <Link to="/viewproduct">Sign Up</Link>
                
            </nav>
        </header>
    </div>
    );
};

export default NavBar;