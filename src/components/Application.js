
import React from "react";

import DayList from "./DayList";
import Appointment from "./Appointment";

import { getAppointmentsForDay, getInterviewersForDay, getInterview } from "helpers/selectors";

import useApplicationData from "hooks/useApplicationData";

import "./Application.scss";

const Application = function() {

  // relating useState defined before used
  const {state, setDay, bookInterview, cancelInterview} = useApplicationData();

  // logic for an array of appointments
  const interviewers = getInterviewersForDay(state, state.day);
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointments = dailyAppointments.map(appointment => {

    const interview = getInterview(state, appointment.interview);
  
    return <Appointment
      key={appointment.id}
      {...appointment}
      interviewers={interviewers}
      interview={interview}
      bookInterview={bookInterview}
      cancelInterview={cancelInterview}
      />
  });

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
        {appointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
};


export default Application;