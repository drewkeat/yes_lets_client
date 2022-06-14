import React from "react";
import { connect } from "react-redux";
import { getAvailabilitiesFromUser } from "../../Reducers/Availabilities/AvailabilitiesSelectors";
import { getHangtimesFromUser } from "../../Reducers/Hangtimes/HangtimesSelectors";

export const DailyDetails = ({
  user,
  date,
  availabilities,
  hangtimes,
  ...props
}) => {
  const renderAvailabilities = () => {
    if (availabilities) {
      let availList = availabilities.filter(
        (avail) =>
          new Date(avail.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return availList.map((avail) => {
        const start = new Date(avail.attributes.start).toLocaleTimeString();
        const end = new Date(avail.attributes.end).toLocaleTimeString();
        return (
          <div key={avail.id}>
            {start} - {end}
          </div>
        );
      });
    }
  };

  const renderHangtimes = () => {
    if (hangtimes) {
      let hangList = hangtimes.filter(
        (hang) =>
          new Date(hang.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return hangList.map((hang) => {
        const start = new Date(hang.attributes.start).toLocaleTimeString();
        const end = new Date(hang.attributes.end).toLocaleTimeString();
        return (
          <div key={hang.id}>
            {start} - {end}
          </div>
        );
      });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{date.toLocaleDateString()}</h2>
      <h3>Availabilities</h3>
      {renderAvailabilities()}
      <h3>Hangtimes</h3>
      {renderHangtimes()}
    </div>
  );
};

const mapStateToProps = (state, { user }) => ({
  availabilities: getAvailabilitiesFromUser(state, user),
  hangtimes: getHangtimesFromUser(state, user),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DailyDetails);
