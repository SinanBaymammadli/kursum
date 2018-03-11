import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: ""
  };

  fieldChanged = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.data);
  };

  render() {
    const { email, password } = this.state.data;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={this.fieldChanged}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={this.fieldChanged}
            required
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
