


import React, { useState } from "react";

import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

import "components/Appointment/styles.scss";

const Form = function(props) {
  const { interviewers, onSave, onCancel } = props;
  const [interviewer, setInterviewer] = useState(props.interviewer || 0);
  const [name, setName] = useState(props.name || "");

  const reset = function() {
    setName("");
    setInterviewer(null);
  }
  const cancel = function() {
    reset();
    onCancel();
  }
  const save = function() {
    onSave(name, interviewer);
  }


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => {
              event.preventDefault()
              setName(event.target.value);
            }}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList
        interviewers={interviewers}
        interviewer={interviewer}
        onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
          onClick={() => cancel()}
          danger>Cancel
          </Button>
          <Button
          onClick={save}
          confirm>Save
          </Button>
        </section>
      </section>
    </main>
  )
}

export default Form;