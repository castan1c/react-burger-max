import React, { useState } from 'react';

import { BurgerBuilder } from '../../containers'
import { Toolbar, SideDrawer } from '../';

const Layout = (props) => {
  const [sideDrawerShowed, setsideDrawerShowed] = useState(false);

  return (
    <div>
      <Toolbar menuClicked={() => setsideDrawerShowed(true)}/>
      <BurgerBuilder/>
      <SideDrawer
        isOpened={sideDrawerShowed}
        closeHandler={() => setsideDrawerShowed(false)}
      />
    </div>
  )
}



export default Layout;