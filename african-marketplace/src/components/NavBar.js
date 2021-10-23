import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import Burger from "./hamburgerMenu/Burger.js"
import Menu from "./hamburgerMenu/Menu.js"

const StyledNav = styled.nav`
  /* background-color: white; */
  padding: 2em;
  opacity: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10%;
`;

const StyledLink = styled(Link)`
  padding-left: 1em;
  padding-right: 1em;
  text-decoration: none;
  color: white;
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

const StyledMarket = styled.div`
  padding: 0.5rem;
  margin-left: 1rem;
  margin-right: 4rem;
  background: #0d7e99;
  border-radius: 20px;
  display: inline-block;
  &:hover {
    background-color: lightblue;
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
  const [ open, setOpen ] = useState(false);

  return (
    <div className="nav-header">
      <header>
      <Burger open = {open} setOpen={setOpen} />
      <Menu open = {open} setOpen={setOpen} />
        <Link to="/">
          <StyledLogo src="logo.png" />
        </Link>
        <StyledNav>
          <StyledMarket>
            <StyledLink2 to="/productlist">Marketplace</StyledLink2>
          </StyledMarket>
          
                            {/* <StyledBtnRed>
                                <button onclick={toggleShow}>
                                Add a Product
                                </button>  </StyledBtnRed>*/}
         
          {/* <StyledLink to="/homepage">About</StyledLink>
          <StyledLink to="/logout">Log out</StyledLink> */}
        </StyledNav>
      </header>
    </div>
  );
};

export default NavBar;
