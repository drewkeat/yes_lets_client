import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../Actions/userActions";

const LoginForm = ({ loginUser, changeForm, ...props }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(state, navigate);
  };

  return (
    <div
      className="form-container"
      style={{
        display: "grid",
        justifyContent: "center",
        width: "100%",
        ...props.style,
      }}
    >
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyContent: "center",
          gap: ".25rem",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          value={state.email}
          style={{ gridColumn: "1/span 2" }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          value={state.password}
          style={{ gridColumn: "1/span 2" }}
        />
        <button type="submit">Login</button>
        <button onClick={() => changeForm(false)}>Signup</button>
      </form>
    </div>
  );
};

export default connect(null, { loginUser })(LoginForm);
