

const getAppointmentsForDay = function(states, day) {
  const appointmentsForDay = [];

  if (states.name === day) {
    appointmentsForDay = state.appointments.map(id => {
      return appointments[id];
    })
    
  }
  return appointmentsForDay; 
}

export default getAppointmentsForDay;