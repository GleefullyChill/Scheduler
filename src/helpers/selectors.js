

const getAppointmentsForDay = function(states, day) {
  let appointmentsForDay;

  for (const daysOfState of states.days) {
    if (daysOfState.name === day) {
      appointmentsForDay = daysOfState.appointments.map(id => {
        
        return states.appointments[id];
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


export { getAppointmentsForDay, getInterview }