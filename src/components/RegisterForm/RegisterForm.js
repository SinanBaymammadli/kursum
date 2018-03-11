import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class RegisterForm extends Component {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
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
    if (e.target.checkValidity()) {
      e.preventDefault();
      axios.post("/api/register", this.state.data).then(res => {
        console.log(res.data);
      });
    }
  };

  render() {
    const { name, email, password, confirmPassword } = this.state.data;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={this.fieldChanged}
            required
          />
        </FormGroup>
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
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={this.fieldChanged}
            required
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default RegisterForm;
