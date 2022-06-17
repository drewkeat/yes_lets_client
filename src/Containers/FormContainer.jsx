import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { Navigate } from "react-router-dom";
import { Navbar } from "../Components";
import { createEntity } from "../Actions";
import "../index.css";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class FormContainer extends Component {
  state = {
    start: moment(),
    end: moment(),
    user_id: this.props.currentUser.id,
    submitted: false,
  };

  handleChange = (e) => {
    const newDate = new Date(e.target.value);
    this.setState({ ...this.state, [e.target.name]: newDate });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEntity(this.state, "availability");
    this.setState({ ...this.state, submitted: !this.state.submitted });
  };

  render() {
    const { start, end, submitted } = this.state;
    return (
      <div>
        {submitted && <Navigate to={"/dashboard"} replace={true} />}
        <Navbar />
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <h1 style={{ textAlign: "Center" }}>Create Availability</h1>
            <div className="form-control">
              <label htmlFor="start">Start Time</label>
              <br />
              <input
                type="datetime-local"
                name="start"
                id="startTime"
                onChange={this.handleChange}
                value={moment(start).format("YYYY-MM-DDTHH:mm")}
              />
            </div>
            <div className="form-control">
              <label htmlFor="end">End Time</label>
              <br />
              <input
                type="datetime-local"
                name="end"
                id="endTime"
                onChange={this.handleChange}
                value={moment(end).format("YYYY-MM-DDTHH:mm")}
              />
            </div>
            <div className="form-control">
              <button type="submit">Create Availability</button>
              <button
                type="reset"
                onClick={() =>
                  this.setState({ start: undefined, end: undefined })
                }
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, { createEntity })(FormContainer);
