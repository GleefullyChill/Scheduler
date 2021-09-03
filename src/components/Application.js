
import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay } from "helpers/selectors";



export default function Application(props) {

  //relating useState defined before used
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  })
  const appointments = [];
  const setDay = function(day) {
    setState({...state, day})
  }
  //get requests here or in another file, never under
  useEffect(() => {
    axios.get("/api/days")
      .then((res) => {
        setState({...state, days: res.data})
      })
      .catch((error) => {
        console.log(error.response);
      })
  },[])

  useEffect(() => {
    axios.get("/api/appointments")
      .then((res) => {
        setState({...state, appointments: res.data})
      })
      .then(() => {
        appointments.push(getAppointmentsForDay(state))
      })
      .catch((error) => {
        console.log(error.response);
      })
  },[])
  

  const appointmentsArray = appointments.map(appointmentItem => {
    return <Appointment key={appointmentItem.id} {...appointmentItem} />
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
        {appointmentsArray}
      </section>
    </main>
  );
}
