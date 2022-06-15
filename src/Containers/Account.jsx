import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar } from "../Components";

class Account extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>Account</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
