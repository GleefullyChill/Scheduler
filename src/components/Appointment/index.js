


import React from "react";

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";


const Appointment = function(props) {
  const { student, interviewer, message, onAdd, onEdit, onDelete, onConfirm, onCancel } = props;
 

  return (
    <article className="appointment">
      <Header time=""/>
      <Empty onAdd={onAdd} />
      <Show student={student} interviewer={interviewer} onDelete={onDelete} onEdit={onEdit} />
      <Confirm message={message} onConfirm={onConfirm} onCancel={onCancel} />
    </article>
  );
}

export default Appointment;