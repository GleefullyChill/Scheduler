


import {useState, useEffect} from "react";
import axios from "axios";

const useApplicationData = function() {

  // set the base state before pulling the data for them
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  // get requests here
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((res) => {
        setState(prev => {
          return {...prev, appointments:res[1].data, days: res[0].data, interviewers: res[2].data};
        });
      })
      .catch((error) => {
        console.log(error.response);
      })
  },[state]);

  // all state update related functions for application below
  const setDay = function(day) {

    setState(prev => {
      return {...prev, day};
    });
  };

  // used in both bookInterview and cancelInterview below
  const updateSpots = function(appointmentId) {

    const newDaysArray = state.days.map(day => {
      if (day.name === state.day) {
        if (state.appointments[appointmentId].interview === null) {
          // checks current state, before the appointment is booking or cancelling, so if it's null you are booking, thus less spots
          const spots = day.spots - 1;
          return {...day, spots};
        }
        const spots = day.spots + 1;
        return {...day, spots};
      }
      return {...day};
    })
    // this array will be used to replace "days", in state
    return newDaysArray;
  };

  // called in Appointment/Index.js
  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    // return here returns the success or error to the saving function, to change mode in a .then (similar in cancelInterview below)
    return (
      axios.put(`/api/appointments/${id}`, {interview})
      .then(res => {
        const days = updateSpots(id);
        setState(prev => {
          return {...prev, appointments, days};
        });
        return res;
      })
      .catch((error) => {
        console.log(error.response);
        // returning error did not cause a .catch in the saving function, so instead it checks for something or nothing
        return null;
      })
    );
  };

  // called in Appointment/Index.js
  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`api/appointments/${id}`)
      .then(res => {
        const days = updateSpots(id);
        setState(prev => {
          return {...prev, appointments, days}
        });
        return res;
      })
      .catch((error) => {
        console.log(error.response)
        return null;
      })
  }
  return {state, setDay, bookInterview, cancelInterview}
}

export default useApplicationData;