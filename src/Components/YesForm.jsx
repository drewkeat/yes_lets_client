import { Formik, Form, Field } from "formik";
import { Container, Grid, Paper } from "@mui/material";

function YesForm({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  ...props
}) {
  return (
    <Container
      component={Paper}
      elevation={3}
      sx={{ minWidth: "100%", minHeight: "100%" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>{children}</Form>;
      </Formik>
    </Container>
  );
}

export default YesForm;
