import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss"

export default function DayListItem(props) {

  const setDayClick = () => props.setDay(props.name);
  return (
    <li onClick={setDayClick}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}