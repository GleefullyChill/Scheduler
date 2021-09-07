

const getAppointmentsForDay = function(state, day) {
  let appointmentsForDay;

  for (const daysOfState of state.days) {
    if (daysOfState.name === day) {
      appointmentsForDay = daysOfState.appointments.map(id => {
        
        return state.appointments[id];
      })
      return appointmentsForDay;
    }
  }
  return (appointmentsForDay ? appointmentsForDay : []); 
}

const getInterview = function(state, interviewData) {
  let interview = null;
  
  if (interviewData) {
    interview = { 
        student: interviewData.student,
      interviewer: state.interviewers[interviewData.interviewer]
    }
  
    return interview;
  }
  return interview;
}

const getInterviewersForDay = function(state, day) {
  let interviewersForDay;

  for (const daysOfState of state.days) {
    if (daysOfState.name === day) {
      interviewersForDay = daysOfState.interviewers.map(id => {



        const interviewer = state.interviewers[id];

        return interviewer;
      
      })
      return interviewersForDay;
    }
  }
  return (interviewersForDay ? interviewersForDay : []); 
}


export { getAppointmentsForDay, getInterviewersForDay, getInterview }