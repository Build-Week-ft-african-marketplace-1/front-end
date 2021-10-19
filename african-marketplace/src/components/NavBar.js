import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: white;
    padding: 2em;
    opacity: 70%;
`

const StyledLink = styled(Link)`
    padding-left: 2em;
    padding-right: 2em;
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    &:hover {
        color: teal;
        text-decoration: underline;
    }
`

const NavBar = () => {

return (
    <div className="nav-header">
        <header>
            <StyledNav>
                <StyledLink to="/">Login</StyledLink>
                <StyledLink to="/signup">Sign Up</StyledLink>
                <StyledLink to="/homepage">Home</StyledLink>
                <StyledLink to="/addproduct">Add Product</StyledLink>
                <StyledLink to="/productlist">Product List</StyledLink>
                <StyledLink to ="/logout">Logout</StyledLink>
            </StyledNav>
        </header>
    </div>
    );
};

export default NavBar;