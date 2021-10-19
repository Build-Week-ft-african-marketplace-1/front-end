import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedNavBar = () => {



    return (
        <div className="nav-header">
            <header>
                <nav>
                    <Link to="/addproduct">Add Product</Link>
                    <Link to="/editproductform">Edit Product</Link>
                    <Link to="/edituserform">Edit User</Link>
                    <Link to="/productlist">Product List</Link>
                </nav>
            </header>
        </div>
        );
    };
    
    export default ProtectedNavBar;