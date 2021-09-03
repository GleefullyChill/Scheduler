
import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";



export default function Application(props) {

  //relating useState defined before used
  const [days, setDays] = useState([]);
  const [appointmentResults, setAppointmentResults] = useState([]);

  //get requests here or in another file, never under
  useEffect(() => {
    axios.get("/api/days")
      .then((res) => {
        setDays(res.data)
      })
      .catch((error) => {
        console.log(error.response);
      })
  },[days])

  useEffect(() => {
    axios.get("/api/appointments")
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error.response);
      })
  },[appointmentResults])
  


  const [day, setDay] = useState("Monday");
  const appointments = appointmentResults.map(appointment => {
    return <Appointment key={appointment.id} {...appointment} />
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
          <DayList days={days} day={day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments}
      </section>
    </main>
  );
}
