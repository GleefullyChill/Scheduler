import DayListItem from "./DayListItem";
import React from "react";



const DayList = function(props) {
  const days = props.days.map(day => {
  const setDayClick = () => props.setDay(day.name);
  return <DayListItem
    key={day.id}
    name={day.name}
    spots={day.spots}
    selected={day.name === props.day}
    setDayClick={setDayClick} />
  })
  return (
    <ul>
      {days}
    </ul>
  )
}



export default DayList;