
import React from 'react';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const controls = ['cheese', 'meat', 'bacon', 'salad'];

  return controls.map(ingredient => <BuildControl label={ingredient} key={ingredient}/>);
}

export default BuildControls;