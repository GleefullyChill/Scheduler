


import React from "react";

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

const Appointment = function(props) {
  const { student, interviewer }
  const onAdd = function () {};
  const onEdit = function () {};
  const onDelete = function () {};

  return (
    <article className="appointment">
      <Header time=""/>
      <Empty onAdd={onAdd} />
      <Show student={student} interviewer={interviewer} onDelete={onDelete} onEdit={onEdit} />

    </article>
  );
}

export default Appointment;