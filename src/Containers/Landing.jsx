import { Container, TextField } from "@mui/material";
import React, { Component } from "react";
// import UserForm from "../Components/UserForm";
import YesForm from "../Components/YesForm";
import * as Yup from "yup";
// import { TextField } from "formik-mui";
export class Landing extends Component {
  formConfig = {
    initialValues: {
      first: "",
      last: "",
      email: "",
      password: "",
    },
    userSchema: Yup.object().shape({
      first: Yup.string().required("First name is required"),
      last: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 5000);
    },
  };
  render() {
    return (
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          background: "gold",
        }}
      >
        {/* <UserForm
          width="80vw"
          title="Sign Up"
          formConfig={this.formConfig}
          submitText="Sign Up"
        /> */}
        <YesForm
          width="80vw"
          title="Sign Up"
          formConfig={this.formConfig}
          submitText="Sign Up"
        >
          <TextField name="first" type="text" label="First Name" fullWidth />
          <TextField name="last" type="text" label="Last Name" fullWidth />
        </YesForm>
      </Container>
    );
  }
}

export default Landing;
