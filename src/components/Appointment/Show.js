


import React from "react";

import "./styles.scss";

const Show = function(props) {

  const { student, interviewer, onEdit, onDelete } = props;
  
  return (
    <main className="appointment__card appointment__card--show">
      <section className="appointment__card-left">
        <h2 className="text--regular" data-testid="student-name">{student}</h2>
        <section className="interviewer" data-testid="interviewer-name">
          <h4 className="text--light">Interviewer</h4>
          {interviewer && <h3 className="text--regular">{interviewer.name}</h3>}
        </section>
      </section>
      <section className="appointment__card-right" data-testid="appointment">
        <section className="appointment__actions">
          <img
            className="appointment__actions-button"
            src="images/edit.png"
            alt="Edit"
            data-testid="edit"
            onClick={onEdit}
          />
          <img
            className="appointment__actions-button"
            src="images/trash.png"
            alt="Delete"
            data-testid="delete"
            onClick={onDelete}
          />
        </section>
      </section>
    </main>
  );
};

export default Show;