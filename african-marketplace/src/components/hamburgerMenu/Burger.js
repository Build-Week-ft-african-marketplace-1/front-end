import React from 'react';
import { StyledBurger } from '../styles/OurStyles';
// import styled from 'styled-components';



//These are new to me
import { bool, func } from 'prop-types';

const Burger = (props) => {
  const { setOpen, open } = props;
  // console.log(open)
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
//the below is unnecessary, but good practice - 'type checker'
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;