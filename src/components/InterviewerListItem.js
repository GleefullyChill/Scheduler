


import React from "react";
import classNames from "classnames";

import "./InterviewerListItem.scss";

const InterviewerListItem = function(props) {

  const { name, avatar, selected, onChange } = props;

  const interviewerClass = "interviewers__item" + classNames({"--selected" : selected});

  return (
    <li className={interviewerClass} onClick={onChange}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
};

export default InterviewerListItem;