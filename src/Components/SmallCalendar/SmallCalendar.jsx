import React, { useEffect } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";

import { getAvailabilitiesFromUser } from "../../Reducers/Availabilities/AvailabilitiesSelectors";
import "./Calendar.css";

const SmallCalendar = ({
  changeDate,
  date,
  user,
  availabilities,
  loading,
  ...props
}) => {
  // TODO: Update to display availabilities and hangouts

  const datesToCheck = availabilities.map((a) => new Date(a.attributes.start));

  const tileContent = ({ date, view }) => {
    if (view === "month" && date.getDay() === 0) {
      return <p>It's Sunday</p>;
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (
        // datesToCheck &&
        datesToCheck.find((cDate) => cDate.getDate() === date.getDate())
      ) {
        return "has-details";
      }
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Calendar
        onChange={changeDate}
        value={date}
        tileContent={tileContent}
        tileClassName={tileClassName}
        calendarType={"US"}
      />
    </div>
  );
};

const mapStateToProps = (state, { user, ...props }) => {
  return {
    availabilities: getAvailabilitiesFromUser(state, user),
  };
};

export default connect(mapStateToProps, null)(SmallCalendar);
