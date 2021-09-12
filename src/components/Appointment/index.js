


import React from "react";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Status from "./Status";
import Error from "./Error";
import Confirm from "./Confirm";
import Form from "./Form";

import useVisualMode from "hooks/useVisualMode";

import "./styles.scss";

const Appointment = function(props) {

  const { time, interview, interviewers, cancelInterview, bookInterview, id } = props;

  // modes
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const CONFIRM = "COMFIRM";
  const DELETING = "DELETING";
  const EDIT = "EDIT";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {

    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    // defined in hooks/useApplicationData.js
    bookInterview(id, interview)
      .then((res) => {
        if(res) {
          return transition(SHOW);
        }
        transition(ERROR_SAVE, true);
      })
      .catch(() => transition(ERROR_SAVE, true));
  };

  function deleteInterview() {
    
    transition(DELETING);
    // defined in  hooks/useApplicationData.js
    cancelInterview(id)
      .then((res) => {
        if(res) {
          return transition(EMPTY);
        }
        transition(ERROR_DELETE, true);
      })
      .catch(() => transition(ERROR_DELETE, true));
  };
  
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
      onCancel={() => transition(SHOW)}
      name={interview.student}
      interviewer={interview.interviewer ? interview.interviewer.id : 0}
      />}

      {mode === SAVING &&
      <Status message={"Saving"} />}

      {mode === ERROR_DELETE &&
      <Error onClose={back} message="Could not delete the interview" />}

      {mode === ERROR_SAVE &&
      <Error onClose={back} message="Could not save the interview" />}

      {mode === DELETING &&
      <Status message={"Deleting"} />}

      {mode === CONFIRM &&
      <Confirm
      onCancel={() => transition(SHOW)}
      onConfirm={deleteInterview}
      message="Are you sure you would like to delete?"
      />}
    </article>
  );
};

export default Appointment;