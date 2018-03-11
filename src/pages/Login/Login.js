import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login } from "../../actions/auth";
import LoginForm from "../../components/LoginForm/LoginForm";

class Login extends Component {
  render() {
    return <LoginForm onSubmit={this.props.login} />;
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(Login);
