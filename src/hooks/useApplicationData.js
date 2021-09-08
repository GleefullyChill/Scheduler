

import {useState, useEffect} from "react";
import axios from "axios";

const useApplicationData = function() {
  


  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = function(day) {
    setState({...state, day})
  }
  //get requests here or in another file, never under
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((res) => {
        setState({...state, appointments:res[1].data, days: res[0].data, interviewers: res[2].data})
      })
      .catch((error) => {
        console.log(error.response);
      })
  },[])

  const updateSpots = function(appointmentId) {
    const newDaysArray = state.days.map(day => {
      if (day.name === state.day) {
        if (state.appointments[appointmentId].interview === null) {
          const spots = day.spots - 1;
          return {...day, spots};
        }
        const spots = day.spots + 1;
        return {...day, spots};
      }
      return {...day};
    })
    return newDaysArray;
  }


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return (
      axios.put(`/api/appointments/${id}`, {interview})
      .then(res => {
        const days = updateSpots(id);
        setState({...state, appointments, days});
        return res;
      })
      .catch((error) => {
        console.log(error.response)
        return null;
      })
    )
  };
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
        setState({...state, appointments, days});
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