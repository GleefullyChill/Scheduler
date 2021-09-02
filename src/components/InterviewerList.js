


import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss"

const InterviewerList = function(props) {

  const { interviewers, interviewer, setInterviewer } = props;

  const interviewerItems = interviewers.map(interviewerItem => {
    const setInterviewerClick = () => setInterviewer(interviewerItem.id);
    return (
      <InterviewerListItem 
        key={interviewerItem.id}
        name={interviewerItem.name}
        avatar={interviewerItem.avatar}
        selected={interviewerItem.id === interviewer}
        setInterviewerClick={setInterviewerClick}
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