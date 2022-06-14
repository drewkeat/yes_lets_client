import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  const listItemStyles = { display: "inline", margin: "1rem" };

  const navigate = useNavigate();
  return (
    <div>
      <ul style={{ listStyle: "none", margin: "auto", textAlign: "center" }}>
        <li style={listItemStyles} onClick={() => navigate("/dashboard")}>
          Dashboard
        </li>
        <li style={listItemStyles} onClick={() => navigate("/account")}>
          Account
        </li>
        <li style={listItemStyles} onClick={() => navigate("/friends")}>
          Friends
        </li>
        <li
          style={listItemStyles}
          onClick={() => navigate("/new-availability")}
        >
          Create Availability
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
