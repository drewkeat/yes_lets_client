import React from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";

import "./Calendar.css";
export const SmallCalendar = ({ onChange, date, ...props }) => {
  // TODO: Update to display availabilities and hangouts
  const tileContent = ({ activeStartDate, date, view }) =>
    view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null;

  return (
    <div style={{ width: "100%" }}>
      <Calendar
        onChange={onChange}
        value={date}
        tileContent={tileContent}
        calendarType={"US"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SmallCalendar);
