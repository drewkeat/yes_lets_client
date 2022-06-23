import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Paper } from "@mui/material";

import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";
import { createEntity } from "../Actions";

const NewAvailabilityForm = ({ user, createEntity, ...props }) => {
  const [state, setState] = useState({
    start: moment(),
    end: moment(),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newDate = new Date(e.target.value);
    setState({ ...state, [e.target.name]: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEntity(
      { ...state, user_id: user.id },
      "availability",
      navigate,
      "/dashboard"
    );
  };

  return (
    <Paper className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "Center" }}>Create Availability</h1>
        <div className="form-control">
          <label htmlFor="start">Start Time</label>
          <br />
          <input
            type="datetime-local"
            name="start"
            id="startTime"
            onChange={handleChange}
            value={moment(state.start).format("YYYY-MM-DDTHH:mm")}
          />
        </div>
        <div className="form-control">
          <label htmlFor="end">End Time</label>
          <br />
          <input
            type="datetime-local"
            name="end"
            id="endTime"
            onChange={handleChange}
            value={moment(state.end).format("YYYY-MM-DDTHH:mm")}
          />
        </div>
        <div className="form-control">
          <button type="submit">Create Availability</button>
          <button
            type="reset"
            onClick={() => setState({ start: moment(), end: moment() })}
          >
            Clear Form
          </button>
        </div>
      </form>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});

export default connect(mapStateToProps, { createEntity })(NewAvailabilityForm);
