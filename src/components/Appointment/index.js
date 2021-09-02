


import React from "react";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

import "components/Appointment/styles.scss";

const Appointment = function(props) {
  const { time, interview, student, interviewer, onAdd, onEdit, onDelete } = props;
 

  return (
    <article className="appointment">
      <Header time={ time } />
      { interview ? <Show student={student} interviewer={interviewer} onDelete={onDelete} onEdit={onEdit} /> : <Empty onAdd={onAdd} /> }
    </article>
  );
}

export default Appointment;