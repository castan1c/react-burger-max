import React, { useState } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
  const [activeRouteIdx, setActiveRouteIdx] = useState(0);
  const routingEndpoints = [
    { label: 'Burger Builder', link: '/', active: true},
    { label: 'Checkout', link: '/', active: false}
  ];

  return (
    <ul className={classes.NavigationItems}>
      {routingEndpoints.map(({label, link}, index) =>
        <NavigationItem
          key={label + index}
          active={activeRouteIdx === index} link={link}
          click={() => setActiveRouteIdx(index)}>
          {label}
        </NavigationItem>
      )}
    </ul>
  )
}

export default NavigationItems;