
import React from 'react';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' }
];

const BuildControls = (props) => {
  return (
    <div>
      {controls.map(control =>
        <BuildControl
          label={control.label}
          key={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      )}
      <button onClick={props.orderHandler} disabled={props.orderDisabled}>
        Order now
      </button>
    </div>
  )
}

export default BuildControls;