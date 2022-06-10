import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchAvailability } from "../../Actions/availabilityActions";
import { getAvailabilitiesFromIDs } from "../../Reducers/Availabilities/AvailabilitiesSelectors";

export const AvailabilitiesView = ({
  availabilityIDs,
  availabilities,
  fetchAvailability,
  selectedDate,
  ...props
}) => {
  // QUESTION: useEffect is rendering too many times, but it is illegal to pass an empty dep array now?
  useEffect(() => {
    if (availabilityIDs) {
      availabilityIDs.forEach((id) => fetchAvailability(id));
    }
  }, []);

  const renderAvailabilities = () => {
    const sortedAvail = availabilities.sort((a, b) => {
      return new Date(a.attributes.start) - new Date(b.attributes.start);
    });
    return sortedAvail.map((availability) => {
      if (!availability) {
        return null;
      }
      let start = new Date(availability.attributes.start);
      let end = new Date(availability.attributes.end);
      return (
        <li
          key={availability.id}
        >{`${start.toLocaleTimeString()} - ${end.toLocaleTimeString()} ${end.toLocaleDateString(
          "en-US"
        )} ID = ${availability.id}`}</li>
      );
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Avail View</h2>
      <h3 style={{ textAlign: "center" }}>
        {selectedDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h3>
      <ul>{renderAvailabilities()}</ul>
    </div>
  );
};

const mapStateToProps = (state, { availabilityIDs, ...props }) => ({
  availabilities: getAvailabilitiesFromIDs(state, availabilityIDs),
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchAvailability })(
  AvailabilitiesView
);
