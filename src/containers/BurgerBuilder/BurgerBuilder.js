import React, { useState } from 'react';

import { Burger, BuildControls, Modal } from '../../components';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import classes from './BurgerBuilder.module.css';

const INGREDIENTS_PRICES = {
  cheese: .8,
  bacon: 1,
  meat: 1.2,
  salad: .4
}

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    cheese: 0,
    bacon: 0,
    meat: 0,
    salad: 0
  });
  const [totalPrice, setTotalPrice] = useState(4);
  const [disabledInfo, setDisabledInfo] = useState({
    cheese: true,
    bacon: true,
    meat: true,
    salad: true
  });
  const [orderDisabled, setOrderDisabled] = useState(true);
  const [modalShowed, setModalShowed] = useState(false);

  const updateState = (newIngredients, newPrice) => {
    const newDisabledInfo = { ...disabledInfo };
    let newOrderDisabled = true;

    for (const key in newIngredients) {
      const currentIngredientCount = newIngredients[key];

      newDisabledInfo[key] = !currentIngredientCount;
      if (currentIngredientCount) {
        newOrderDisabled = false;
      }
    }

    setIngredients(newIngredients);
    setTotalPrice(newPrice);
    setOrderDisabled(newOrderDisabled);
    setDisabledInfo(newDisabledInfo);
  }

  const addIngredient = (type) => {
    const newIngredients= {
      ...ingredients
    };
    const newPrice = totalPrice + INGREDIENTS_PRICES[type];

    newIngredients[type]++;
    updateState(newIngredients, newPrice);
  }

  const removeIngredient = (type) => {
    if (ingredients[type]) {
      const newIngredients= {
        ...ingredients
      };
      const newPrice = totalPrice - INGREDIENTS_PRICES[type];

      newIngredients[type]--;
      updateState(newIngredients, newPrice);
    }
  }

  const orderHandler = () => {
    setModalShowed(true);
  }

  const orderCancelHandler = () => {
    setModalShowed(false);
  }

  return (
    <div className={classes.BurgerBuilder}>
      <Modal closed={orderCancelHandler} visible={modalShowed}>
        <OrderSummary ingredients={ingredients}
          confirmed={orderCancelHandler}
          canceled={orderCancelHandler}
          price={totalPrice}
        />
      </Modal>
      <Burger ingredients={ingredients}/>
      <BuildControls
        ingredientAdded={addIngredient}
        ingredientRemoved={removeIngredient}
        disabled={disabledInfo}
        orderDisabled={orderDisabled}
        orderHandler={orderHandler}
      />
      <h4>Total Price is {totalPrice.toFixed(2)} $</h4>
    </div>
  );
}

export default BurgerBuilder;