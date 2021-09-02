


import React from "react";

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty"

const Appointment = function(props) {
  const onAdd = function () {};
  return (
    <article className="appointment">
      <Header time=""/>
      <Empty onAdd={onAdd} />
    </article>
  );
}

export default Appointment;