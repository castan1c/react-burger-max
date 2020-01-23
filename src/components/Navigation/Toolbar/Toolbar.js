import React from 'react';

import classes from './Toolbar.module.css';


import { Logo, NavigationItems } from '../../';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <DrawerToggle clicked={props.menuClicked}/>
      <Logo/>
      <nav className={classes.DesktopOnly}>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default Toolbar;