import React from 'react';

import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.isOpened} click={props.closeHandler}/>
      <div className={`${classes.SideDrawer} ${props.isOpened ? classes.Open : classes.Close}`}>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </>
  )
}

export default SideDrawer;