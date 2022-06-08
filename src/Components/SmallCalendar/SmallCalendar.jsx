import React, { useState } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";

import "./Calendar.css";
export const SmallCalendar = (props) => {
  const [value, onChange] = useState(new Date());

  // TODO: Update to display availabilities and hangouts
  const tileContent = ({ activeStartDate, date, view }) =>
    view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null;

  return (
    <div style={{ width: "100%" }}>
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={tileContent}
        calendarType={"US"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SmallCalendar);
