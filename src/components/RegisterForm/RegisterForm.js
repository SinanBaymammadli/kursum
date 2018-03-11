import React from "react";
import { Button, Form } from "reactstrap";
import { reduxForm, Field } from "redux-form";

import {
  required,
  maxLength,
  minLength,
  email,
  match
} from "../../helpers/formValidation";
import FormField from "../FormField/FormField";

let RegisterForm = ({ handleSubmit, submitting, pristine, onSubmit }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Field
      name="name"
      label="Name"
      component={FormField}
      validate={[required, maxLength(20), minLength(3)]}
    />
    <Field
      type="email"
      name="email"
      label="Email"
      component={FormField}
      validate={[required, email]}
    />
    <Field
      type="password"
      name="password"
      label="Password"
      component={FormField}
      validate={[required, minLength(6)]}
    />
    <Field
      type="password"
      name="confirmPassword"
      label="Confirm Password"
      component={FormField}
      validate={[required, match("password")]}
    />
    <Button disabled={submitting || pristine}>Submit</Button>
  </Form>
);

RegisterForm = reduxForm({
  form: "register",
  destroyOnUnmount: false
})(RegisterForm);

export default RegisterForm;
