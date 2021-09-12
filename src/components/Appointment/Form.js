


import React, { useState } from "react";

import InterviewerList from "../InterviewerList";
import Button from "../Button";

import "./styles.scss";

const Form = function(props) {

  const { interviewers, onSave, onCancel } = props;

  // || null is used to satisfy a given Jest test, but preference would be to validate interviewer or use 0
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || "");
  const [error, setError] = useState("");

  const reset = function() {
    setName("");
    setInterviewer(null);
  }
  const cancel = function() {
    reset();
    onCancel();
  }

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    onSave(name, interviewer);
  }


  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">

        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            data-testid="student-name-input"
            name={props.name}
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => {
              event.preventDefault()
              setName(event.target.value);
            }}
          />
        </form>

        {error && <section className="appointment__validation">{error}</section>}

        <InterviewerList
        interviewers={interviewers}
        interviewer={interviewer}
        onChange={setInterviewer}
        data-testid="interviewer-avatar"
        />
      </section>

      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
          onClick={cancel}
          danger
          >Cancel
          </Button>
          <Button
          onClick={validate}
          confirm
          data-testid="save"
          >Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;