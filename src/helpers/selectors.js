

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

export { getAppointmentsForDay }