import { Button, Container, Grid, LinearProgress, Paper } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";

const UserForm = () => {
  const initialValues = {
    first: "",
    last: "",
    phone: "",
    email: "",
    password: "",
  };
  const userSchema = Yup.object().shape({
    first: Yup.string().required("First name is required"),
    last: Yup.string().required("Last name is required"),
    phone: Yup.string().required(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password required"),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };
  return (
    <Container
      component={Paper}
      elevation={3}
      sx={{ minWidth: "100%", minHeight: "100%" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="first"
              type="text"
              label="First Name"
              fullWidth
            />
            <Field
              component={TextField}
              name="last"
              type="text"
              label="Last Name"
              fullWidth
            />
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              fullWidth
            />
            <Field
              component={TextField}
              name="password"
              type="password"
              label="Password"
              fullWidth
            />
            {isSubmitting && <LinearProgress />}
            <Button
              variant="contained"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserForm;
