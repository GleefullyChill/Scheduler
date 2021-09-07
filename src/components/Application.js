
import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterviewsForDay, getInterview } from "helpers/selectors";



export default function Application(props) {

  //relating useState defined before used
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
      axios.put(`/api/appointments/${id}`, interview)
      .then(res => {
        setState({...state, appointments})
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
        setState({...state, appointments})
        return res;
      })
      .catch((error) => {
        console.log(error.response)
        return null;
      })
  }

  

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const schedule = dailyAppointments.map(appointmentItem => {
    const interview = getInterview(state, appointmentItem.interview)
    return <Appointment
      key={appointmentItem.id}
      {...appointmentItem}
      interviewers={state.interviewers}
      interview={interview}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
      />
  })

 

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
      </section>
    </main>
  );
}
