


import React from "react";
import classNames from "classnames";

import "./DayListItem.scss";

const DayListItem = function(props) {

  const { spots, name, onChange, selected } = props;
  
  const dayClass = classNames('day-list__item',{
    'day-list__item--selected': selected,
    'day-list__item--full': (spots === 0)
  });
 
  return (
    <li onClick={onChange} className={dayClass} data-testid="day" >
      <h2 className="text--regular">{name}</h2> 
      {!spots && <h3 className="text--light">no spots remaining</h3>}
      {spots === 1 && <h3 className="text--light">1 spot remaining</h3>}
      {spots > 1 && <h3 className="text--light">{spots} spots remaining</h3>}
    </li>
  );
};


export default DayListItem;