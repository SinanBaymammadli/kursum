import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { logout } from "../../actions/auth";
import s from "./Header.css";

class Header extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

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

          <Dropdown
            className={s.navItem}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.props.logout}>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
