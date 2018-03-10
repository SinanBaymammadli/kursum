import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import s from "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        <div className={s.headerLeft} />
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
          <NavLink className={s.navItem} to="/dashboard">
            Dashboard
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
