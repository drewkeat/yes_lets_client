import React from "react";
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
  const datesToCheck = availabilities.map((a) => new Date(a.attributes.start));

  const tileContent = ({ date, view }) => {
    if (
      view === "month" &&
      datesToCheck.find(
        (cDate) => cDate.toLocaleDateString() === date.toLocaleDateString()
      )
    ) {
      return <div>details</div>;
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (
        datesToCheck.find(
          (cDate) => cDate.toLocaleDateString() === date.toLocaleDateString()
        )
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
