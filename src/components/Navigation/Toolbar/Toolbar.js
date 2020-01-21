import React from 'react';

import classes from './Toolbar.module.css';

import { Logo } from '../../';

const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <span>Menu</span>
      <Logo/>
      <span>...</span>
    </div>
  )
}

export default Toolbar;