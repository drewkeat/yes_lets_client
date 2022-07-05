import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Container, Typography } from "@mui/material";

import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";
import { createEntity } from "../Actions";

const NewAvailabilityForm = ({ user, createEntity, start, end, ...props }) => {
  const [state, setState] = useState({
    start: start,
    end: end,
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
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">
          {entityID ? entityID : "Create Availability"}
        </Typography>
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
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: selectCurrentUser(state),
});

export default connect(mapStateToProps, { createEntity })(NewAvailabilityForm);
