import React, { useState } from 'react';

import { Burger, BuildControls } from '../../components';

const BurgerBuilder = (props) => {
  const [burger, setBurger] = useState({
    cheese: 2,
    bacon: 2,
    meat: 1,
    salad: 1
  });

  // const ingredientsToolbar = ['cheese', 'meat', 'bacon', 'salad'];



  return (
    <>
      <Burger ingredients={burger}/>
      <BuildControls/>
    </>
  );
}

export default BurgerBuilder;