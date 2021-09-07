


import React from "react";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

import "components/Appointment/styles.scss";




const Appointment = function(props) {
  const { time, interview, interviewers, bookInterview, id } = props;

  

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const PROBLEM = "PROBLEM";
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    bookInterview(id, interview)
      .then((res) => {
        if(res) {
          return transition(SHOW);
        }
        transition(PROBLEM);
      })
      .catch(() => transition(PROBLEM))
  };

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
      onSave={save}
      onCancel={() => {
        back();
      }} />}
      {mode === SAVING &&
      <Status />}
      {mode === PROBLEM &&
      <Error />}
    </article>
  );
}

export default Appointment;