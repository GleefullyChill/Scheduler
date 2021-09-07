
import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";



export default function Application(props) {

  //relating useState defined before used
  const {state, setDay, bookInterview, cancelInterview} = useApplicationData();
  const interviewers = getInterviewersForDay(state, state.day);
  
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const schedule = dailyAppointments.map(appointmentItem => {

    const interview = getInterview(state, appointmentItem.interview)
  
    return <Appointment
      key={appointmentItem.id}
      {...appointmentItem}
      interviewers={interviewers}
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
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
