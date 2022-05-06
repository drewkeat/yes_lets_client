import React from "react";
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

const YesForm = ({
  width,
  title,
  formConfig,
  submitText,
  children,
  ...props
}) => {
  const renderChildren = children.map((child, index) => {
    props = child.props;
    return (
      <Grid item key={index}>
        {child}
      </Grid>
    );
  });
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
              {renderChildren}
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

export default YesForm;
