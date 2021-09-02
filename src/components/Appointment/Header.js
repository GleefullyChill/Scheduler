


import React from "react";
import "components/Appointment/styles.scss"

const Header = function(props) {
  const { time } = props;
  
  return (
    <header>
      <h4 className="text--semi-bold">{time}</h4>
      <hr className="appointment__separator" />
    </header>
  )
}

export default Header;