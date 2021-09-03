

const getAppointmentsForDay = function(states, day) {
  let appointmentsForDay;

  for (const stateOfDay of states.days) {
    if (stateOfDay.name === day) {
      appointmentsForDay = stateOfDay.appointments.map(id => {
        
        return states.appointments[id];
      })
      return appointmentsForDay;
    }
  }
  return (appointmentsForDay ? appointmentsForDay : []); 
}

export { getAppointmentsForDay }