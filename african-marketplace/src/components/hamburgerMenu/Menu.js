import React from 'react';
import { StyledMenu } from '../styles/OurStyles';
import { bool } from 'prop-types'; 
import { StyledNav, StyledLink, StyledBtnRed, StyledBtnBlue, StyledLink2 } from '../styles/OurStyles';

const Menu = (props) => {
   
   return (
     <StyledMenu open={props.open}>
        {/* <StyledNav>  */}

        <StyledLink to="/homepage">About</StyledLink>
        <StyledLink to="/logout">Log out</StyledLink>
        <StyledBtnRed>
           <StyledLink2 to="/addproduct">Add a Product</StyledLink2>
        </StyledBtnRed>
        <StyledBtnBlue>
            <StyledLink2 to="/productlist">Marketplace</StyledLink2>
         </StyledBtnBlue>

        {/* </StyledNav> */}

     </StyledMenu>
   )
 }
 Menu.propTypes = {
    open: bool.isRequired,
 }
 export default Menu;