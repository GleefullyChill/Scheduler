


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

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            onSubmit={event => event.preventDefault()}
            /*
              This must be a controlled component
            */
          />
        </form>
        <InterviewerList
        interviewers={interviewers}
        value={interviewer}
        onChange={(event) => setInterviewer(interviewer.id)} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
          onClick={() => cancel()}
          danger>Cancel
          </Button>
          <Button
          onClick={onSave}
          confirm>Save
          </Button>
        </section>
      </section>
    </main>
  )
}

export default Form;