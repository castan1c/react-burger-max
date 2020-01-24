import React from 'react';

import classes from './Burger.module.css';

import { BurgerIngredient } from '../';

const burger = (props) => {
  let ingredientsCount = 0;
  let ingredients = Object.keys(props.ingredients).map(ingredientId => {
    ingredientsCount += props.ingredients[ingredientId];

    return [...Array(props.ingredients[ingredientId])].map((_, idx) =>
      <BurgerIngredient key={ingredientId + idx} type={ingredientId}/>
    );
  });

  if (!ingredientsCount) {
    ingredients = <span>No ingredients</span>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'}/>
      {ingredients}
      <BurgerIngredient type={'bread-bottom'}/>
    </div>
  );
}

export default burger;