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
            </nav>
        </header>
    </div>
    );
};

export default NavBar;