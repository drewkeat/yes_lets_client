import React, { Component } from "react";
import { connect } from "react-redux";

import { Navbar, NewAvailabilityForm } from "../Components";
import "../index.css";
import { selectCurrentUser } from "../Reducers/Users/UsersSelectors";

class FormContainer extends Component {
  render() {
    // const { start, end, submitted } = this.state;
    return (
      <div>
        <Navbar />
        <NewAvailabilityForm />
        {/* {submitted && <Navigate to={"/dashboard"} replace={true} />}
        <Paper className="form-container">
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
        </Paper> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(FormContainer);
