

const getAppointmentsForDay = function(state) {
  let appointmentsForDay;

  for (const daysOfState of state.days) {
    if (daysOfState.name === state.day) {
      appointmentsForDay = daysOfState.appointments.map(id => {
        
        return state.appointments[id];
      })
      return appointmentsForDay;
    }
  }
  return (appointmentsForDay ? appointmentsForDay : []); 
}

export { getAppointmentsForDay }