import React from 'react';

import { Button} from '../../';

const OrderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients);

  return (
    <>
      <h3>Order summary</h3>
      <span>A burger with the following ingredients: </span>
      <ul>
        {ingredientSummary.map(([ingredientName, ingredientQty]) =>
          <li key={ingredientName}><span>{ingredientName}: {ingredientQty}</span></li>)}
      </ul>
      <strong>Full price: {props.price.toFixed(2)} $</strong>
      <div>
        <Button clicked={props.confirmed} btnStyle='Success'>Confirm</Button>
        <Button clicked={props.canceled} btnStyle='Danger'>Cancel</Button>
      </div>
    </>
  )

}

export default OrderSummary;