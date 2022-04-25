import {
  Button,
  Container,
  Grid,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

const UserForm = ({
  width,
  title,
  formConfig,
  submitText,
  children,
  ...props
}) => {
  return (
    <Container
      component={Paper}
      elevation={3}
      sx={{
        width: width,
        py: "1.5rem",
        background: "#eee",
      }}
    >
      <Formik {...formConfig}>
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Typography variant="h4" align="center" gutterBottom>
              {title}
            </Typography>
            <Grid container spacing={2}>
              {isSubmitting && (
                <Grid container item justifyContent={"center"}>
                  <CircularProgress />
                </Grid>
              )}
              {/* uncomment below for full abstraction */}
              {/* {children} */}
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="first"
                  type="text"
                  label="First Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="last"
                  type="text"
                  label="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  fullWidth
                />
              </Grid>
              <Grid item container xs={12} justifyContent="center">
                <Button
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  {submitText}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default UserForm;
