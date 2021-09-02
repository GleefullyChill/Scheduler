


import React from "react";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

import "components/Appointment/styles.scss";

const Appointment = function(props) {
  const { time, interview, onAdd, onEdit, onDelete } = props;
 

  return (
    <article className="appointment">
      <Header time={ time } />
      { interview ? <Show student={interview.student} interviewer={interview.interviewer} onDelete={onDelete} onEdit={onEdit} /> : <Empty onAdd={onAdd} /> }
    </article>
  );
}

export default Appointment;