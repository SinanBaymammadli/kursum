import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

const FormField = ({ name, label, input, meta, ...rest }) => {
  const invalid = meta.error && meta.touched;
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        invalid={invalid}
        name={name}
        id={name}
        placeholder={label}
        {...rest}
        {...input}
      />
      {invalid && <FormFeedback>{meta.error}</FormFeedback>}
    </FormGroup>
  );
};

export default FormField;
