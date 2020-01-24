
import React from 'react';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {props.controls.map(control =>
        <BuildControl
          label={control.label}
          key={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      )}
      <button className={classes.OrderButton}  onClick={props.orderHandler} disabled={props.orderDisabled}>
        Order now
      </button>
    </div>
  )
}

export default BuildControls;