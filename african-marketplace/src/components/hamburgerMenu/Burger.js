import React from 'react';
import { StyledBurger } from '../styles/OurStyles';

//These are new to me
import { bool, func } from 'prop-types';

const Burger = (props) => {
  const { setOpen, open } = props;
  return (
    <StyledBurger>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;