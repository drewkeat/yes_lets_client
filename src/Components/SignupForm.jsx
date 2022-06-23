import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEntity, updateEntity } from "../Actions";

const SignupForm = ({
  changeForm,
  createEntity,
  user,
  updateEntity,
  ...props
}) => {
  const [state, setState] = useState({
    first: "",
    last: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (user) {
      const [firstName, lastName] = user.fullName.split(" ");
      const { email, phoneNumber, id } = { ...user };
      setState({
        ...state,
        first: firstName,
        last: lastName,
        email: email,
        phone_number: phoneNumber || "",
        user_id: id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user
      ? updateEntity(state, "user", navigate, "/dashboard")
      : createEntity(state, "user", navigate, "/dashboard");
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
          gridTemplateColumns: "repeat(2,1fr)",
          justifyContent: "center",
          gap: ".25rem",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          name="first"
          type="text"
          placeholder="First Name"
          onChange={(e) => handleChange(e)}
          value={state.first}
        />
        <input
          name="last"
          type="text"
          placeholder="Last Name"
          onChange={(e) => handleChange(e)}
          value={state.last}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          value={state.email}
        />
        <input
          name="phone_number"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => handleChange(e)}
          value={state.phone_number}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          value={state.password}
        />
        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => handleChange(e)}
          value={state.password_confirmation}
        />
        {!user && (
          <>
            <button type="submit">Join</button>
            <button onClick={() => changeForm(true)}>Back to Login</button>
          </>
        )}
        {user && (
          <>
            <button type="submit">Update Profile</button>
            {/* TODO: Create delete profile action */}
            <button type="button">Delete Profile</button>
          </>
        )}
      </form>
    </div>
  );
};

export default connect(null, { createEntity, updateEntity })(SignupForm);
