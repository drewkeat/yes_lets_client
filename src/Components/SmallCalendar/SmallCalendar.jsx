import React, { useEffect } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";

import { getAvailabilitiesFromUser } from "../../Reducers/Availabilities/AvailabilitiesSelectors";
import "./Calendar.css";

const SmallCalendar = ({ changeDate, date, user, ...props }) => {
  useEffect(() => {}, []);

  // TODO: Update to display availabilities and hangouts
  const tileContent = ({ date, view }) =>
    view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null;

  return (
    <div style={{ width: "100%" }}>
      <Calendar
        onChange={changeDate}
        value={date}
        tileContent={tileContent}
        calendarType={"US"}
      />
    </div>
  );
};

const mapStateToProps = (state, { user, ...props }) => {
  return {
    availabilites: getAvailabilitiesFromUser(state, user),
  };
};

export default connect(mapStateToProps, null)(SmallCalendar);
