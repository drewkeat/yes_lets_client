import React, { useState } from "react";

const LoginForm = ({ ...props }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // TODO: Alter to transmit form values to api
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div
      className="form-container"
      style={{
        display: "grid",
        justifyContent: "center",
        width: "100vw",
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
        <button onClick={() => props.changeForm(false)}>Signup</button>
      </form>
    </div>
  );
};

export default LoginForm;
