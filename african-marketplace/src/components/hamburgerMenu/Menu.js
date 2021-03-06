import React from 'react';
import { StyledMenu } from '../styles/OurStyles';
import { bool } from 'prop-types'; 
import { StyledLink, StyledBtnRed, StyledLink2 } from '../styles/OurStyles';

const Menu = (props) => {
   
   return (
     <StyledMenu open={props.open}>
        <StyledLink to="/homepage">About</StyledLink>
        <StyledLink to="/logout">Log out</StyledLink>
        <StyledLink to="/login">Login</StyledLink>

     </StyledMenu>
   )
 }
 Menu.propTypes = {
    open: bool.isRequired,
 }
 export default Menu;