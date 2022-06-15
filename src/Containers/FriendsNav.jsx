import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar } from "../Components";

class FriendsNav extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 style={{ textAlign: "center" }}>FriendsNav</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsNav);
