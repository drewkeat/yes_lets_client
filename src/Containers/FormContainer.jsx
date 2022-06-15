import React, { Component } from "react";
import { connect } from "react-redux";
// import { Navigate } from "react-router-dom";
import { Navbar } from "../Components";
import { createEntity } from "../Actions";
import "../index.css";

class FormContainer extends Component {
  state = {
    start: undefined,
    end: undefined,
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Install Datetime Picker");
    console.log(this.state);
    // this.props.createEntity(this.state, "availability", Navigate, "/dashboard");
  };

  render() {
    const { start, end } = this.state;
    return (
      <div>
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
                value={start}
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
                value={end}
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createEntity })(FormContainer);
