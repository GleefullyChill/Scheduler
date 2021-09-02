


import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss"

const InterviewerList = function(props) {

  const { interviewers, interviewer, onChange } = props;

  const interviewerItems = interviewers.map(interviewerItem => {
    return (
      <InterviewerListItem 
        key={interviewerItem.id}
        id={interviewerItem.id}
        name={interviewerItem.name}
        avatar={interviewerItem.avatar}
        selected={interviewerItem.id === interviewer}
        onChange={onChange}
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerItems}</ul>
    </section>
  )
}


export default InterviewerList;