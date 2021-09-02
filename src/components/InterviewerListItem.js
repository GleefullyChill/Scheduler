


import React from "react";

import "components/InterviewerListItem.scss"

const InterviewerListItem = function(props) {
  const { id, name, avatar, selected, setInterviewer } = props;
  const setInterviewerClick = () => setInterviewer(id);
  return (
    <>
      {!selected && <li className="interviewers__item" id={id} onClick={setInterviewerClick}>
        <img
          className="interviewers__item-image"
          src={avatar}
          alt={name}
        />
      </li>}
      {selected && <li className="interviewers__item--selected" id={id} onClick={setInterviewerClick}>
        <img
          className="interviewers__item-image"
          src={avatar}
          alt={name}
        />
        {name}
      </li>}
    </>
  )
}

export default InterviewerListItem;