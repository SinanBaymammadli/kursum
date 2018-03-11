import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../actions/auth";
import s from "./Header.css";

class Header extends Component {
  render() {
    let nav;

    if (this.props.isAuthenticated) {
      nav = (
        <nav className={s.headerRight}>
          <NavLink className={s.navItem} exact to="/">
            Home
          </NavLink>
          <NavLink className={s.navItem} to="/dashboard">
            Dashboard
          </NavLink>

          <button onClick={this.props.logout} className={s.navItem}>
            Logout
          </button>
        </nav>
      );
    } else {
      nav = (
        <nav className={s.headerRight}>
          <NavLink className={s.navItem} exact to="/">
            Home
          </NavLink>
          <NavLink className={s.navItem} to="/login">
            Login
          </NavLink>
          <NavLink className={s.navItem} to="/register">
            Register
          </NavLink>
        </nav>
      );
    }

    return (
      <header className={s.header}>
        <div className={s.headerLeft} />
        {nav}
      </header>
    );
  }
}

export default withRouter(connect(null, { logout })(Header));
