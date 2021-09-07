


import React from "react";

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Confirm from "components/Appointment/Confirm";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

import "components/Appointment/styles.scss";




const Appointment = function(props) {
  const { time, interview, interviewers, cancelInterview, bookInterview, id } = props;

  

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const PROBLEM = "PROBLEM";
  const CONFIRM = "COMFIRM";
  const DELETING = "DELETING";
  const EDIT = "EDIT"
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
  function deleteInterview(id) {
    transition(DELETING)
    cancelInterview(id)
      .then((res) => {
        if(res) {
          return transition(EMPTY);
        }
        transition(PROBLEM);
      })
      .catch(() => transition(PROBLEM))
  }

  return (
    <article className="appointment">
      <Header time={ time } />

      {mode === EMPTY &&
      <Empty
      onAdd={() => {transition(CREATE)}}
      />}

      {mode === SHOW &&
      <Show
      student={interview.student}
      interviewer={interview.interviewer}
      onDelete={() => transition(CONFIRM)}
      onEdit={() => transition(EDIT)}
      />}

      {mode === CREATE &&
      <Form
      interviewers={interviewers}
      onSave={save}
      onCancel={() => transition(EMPTY)} />}

      {mode === EDIT &&
      <Form interviewers={interviewers}
      onSave={save}
      onCancel={() => transition(SHOW)} />}

      {mode === SAVING &&
      <Status message={"Saving"} />}

      {mode === PROBLEM &&
      <Error onClose={() => back} />}

      {mode === DELETING &&
      <Status message={"Deleting"} />}

      {mode === CONFIRM &&
      <Confirm onCancel={() => transition(SHOW)} onConfirm={deleteInterview} message="Are you sure you would like to delete?" />}
    </article>
  );
}

export default Appointment;