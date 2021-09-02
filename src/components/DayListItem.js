import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss"

export default function DayListItem(props) {
  const { spots, name, setDay, selected } = props;
  const dayClass = "day-list__item" + classNames({
    "--selected": selected,
    "--full": (spots === 0)
  })
  
  const setDayClick = () => setDay(name);
  return (
    <li onClick={setDayClick} className={dayClass}>
      <h2 className="text--regular">{name}</h2> 
      {!spots && <h3 className="text--light">no spots remaining</h3>}
      {spots === 1 && <h3 className="text--light">1 spot remaining</h3>}
      {spots > 1 && <h3 className="text--light">{spots} spots remaining</h3>}
    </li>
  );
}


