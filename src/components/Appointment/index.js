


import React from "react";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

import "components/Appointment/styles.scss";




const Appointment = function(props) {
  const { time, interview, interviewers, onSave } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY);

  return (
    <article className="appointment">
      <Header time={ time } />
      {mode === EMPTY &&
      <Empty
      onAdd={() => {
        transition(CREATE)}
      }
      />}
      { mode === SHOW &&
      <Show
      student={interview.student}
      interviewer={interview.interviewer}
      onDelete={() => console.log(`Clicked onDelete`)}
      onEdit={() => console.log(`Clicked onEdit`)}
      />}
      {mode === CREATE &&
      <Form interviewers={[]}
      onSave={onSave}
      onCancel={() => {
        back();
      }} />}
    </article>
  );
}

export default Appointment;