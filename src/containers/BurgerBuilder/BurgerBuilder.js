import React, { useState, useEffect } from 'react';

import axios from '../../axios-orders';

import { Burger, BuildControls, Modal } from '../../components';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import classes from './BurgerBuilder.module.css';

const BurgerBuilder = () => {
  const [loadingIngredients, setLoadingIngredients] = useState(true);
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(4);
  const [disabledInfo, setDisabledInfo] = useState(null);
  const [orderDisabled, setOrderDisabled] = useState(true);
  const [modalShowed, setModalShowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ingredientsPrices, setIngredientsPrices] = useState(null);
  const [controls, setControls] = useState(null);

  useEffect(() => {
    axios.get('/ingredients.json').then(response => {
      const receivedIngredients = {};
      const initialDisabledInfo = {};
      const receivedIngredientPrices = {};
      const controlsWithLabels = [];

      for (const key in response.data) {
        receivedIngredients[key] = 0;
        initialDisabledInfo[key] = true;
        receivedIngredientPrices[key] = response.data[key].price;
        controlsWithLabels.push({
          label: response.data[key].label,
          type: key
        });
      }
      setIngredients(receivedIngredients);
      setDisabledInfo(initialDisabledInfo);
      setIngredientsPrices(receivedIngredientPrices);
      setControls(controlsWithLabels);
      setLoadingIngredients(false);
    });
  }, []);

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
    const newPrice = totalPrice + ingredientsPrices[type];

    newIngredients[type]++;
    updateState(newIngredients, newPrice);
  }

  const removeIngredient = (type) => {
    if (ingredients[type]) {
      const newIngredients= {
        ...ingredients
      };
      const newPrice = totalPrice - ingredientsPrices[type];

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

  const orderConfirmHandler = () => {
    setLoading(true);
    axios.post('/orders.json', {
      ingredients, price: totalPrice, user: {
        name: 'Vlad',
        country: 'Ukraine'
      }
    }).then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => {
      setLoading(false);
      setModalShowed(false);
    });
  }


  return (
    <div className={classes.BurgerBuilder}>
      <Modal closed={orderCancelHandler} visible={modalShowed}>
        {loadingIngredients || loading ? <Spinner/> : <OrderSummary ingredients={ingredients}
          confirmed={orderConfirmHandler}
          canceled={orderCancelHandler}
          price={totalPrice}
        />}
      </Modal>
      {loadingIngredients ? <Spinner/> :
        <>
          <Burger ingredients={ingredients}/>
          <div className={classes.Summary}>
            <h4>Total Price is <strong>{totalPrice.toFixed(2)} $</strong></h4>
          </div>
          <BuildControls
            controls={controls}
            ingredientAdded={addIngredient}
            ingredientRemoved={removeIngredient}
            disabled={disabledInfo}
            orderDisabled={orderDisabled}
            orderHandler={orderHandler}
          />
        </>
      }
    </div>
  );
}

export default withErrorHandler(BurgerBuilder, axios);