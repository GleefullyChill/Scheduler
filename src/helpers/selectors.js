

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

const getInterviewsForDay = function(state, day) {
  let interviewsForDay;

  for (const daysOfState of state.days) {
    if (daysOfState.name === day) {
      interviewsForDay = daysOfState.appointments.map(id => {

        const interview = getInterview(state, state.appointments[id].interview)
        const interviewOfAppointment = {...state.appointments[id], interview}

        return interviewOfAppointment;
      
      })
      return interviewsForDay;
    }
  }
  return (interviewsForDay ? interviewsForDay : []); 
}


export { getAppointmentsForDay, getInterviewsForDay, getInterview }