import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

import { register } from "../../actions/auth";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

class Register extends Component {
  render() {
    return (
      <div>
        {this.props.isRegisterSuccessful && (
          <Alert color="success">
            Thanks for signing up! Please check your email to complete your
            registration.
          </Alert>
        )}
        <RegisterForm onSubmit={this.props.register} />
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { register })(Register);
