import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => props.show &&
  <div onClick={props.click} className={classes.Backdrop}></div>;

export default Backdrop;