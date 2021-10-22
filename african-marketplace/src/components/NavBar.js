import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import Burger from "./hamburgerMenu/Burger.js"

const StyledNav = styled.nav`
  /* background-color: white; */
  padding: 2em;
  opacity: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled(Link)`
  padding-left: 1em;
  padding-right: 1em;
  text-decoration: none;
  color: linen;
  font-size: 1.25em;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

const StyledLink2 = styled(Link)`
  padding-left: 1em;
  padding-right: 1em;
  text-decoration: none;
  color: white;
  font-size: 1.25em;
`;

const StyledBtnBlue = styled.div`
  padding: .5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background: #0d7e99;
  border-radius: 20px;
  display: inline-block;
  &:hover {
    background-color: lightblue;
  }
`;

const StyledBtnRed = styled.div`
  padding: .5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background: #E84A34;
  border-radius: 20px;
  display: inline-block;
  &:hover {
    background-color: pink;
  }
`;

const StyledLogo = styled.img`
  width: 100px;
  position: absolute;
  z-index: 9;
  left: 2rem;
  top: 1.5rem;
`;

const NavBar = () => {
  return (
    <div className="nav-header">
      <header>
      <Burger/>
        <Link to="/">
          <StyledLogo src="logo.png" />
        </Link>
        <StyledNav>
          <StyledBtnBlue>
            <StyledLink2 to="/productlist">Marketplace</StyledLink2>
          </StyledBtnBlue>
          <StyledBtnRed>
            <StyledLink2 to="/addproduct">Add a Product</StyledLink2></StyledBtnRed>
          <StyledLink to="/homepage">About</StyledLink>
          <StyledLink to="/logout">Log out</StyledLink>
        </StyledNav>
      </header>
    </div>
  );
};

export default NavBar;
