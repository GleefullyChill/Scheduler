


import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss"

const InterviewerListItem = function(props) {
  const { name, avatar, selected, setInterviewerClick } = props;
  const interviewerClass = "interviewers__item" + classNames({"--selected" : selected})
  return (
    <li className={interviewerClass} onClick={setInterviewerClick}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>

  )
}

export default InterviewerListItem;