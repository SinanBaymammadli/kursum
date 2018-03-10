import React, { Component } from "react";
import { Link } from "react-router-dom";

import s from "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className={s.Header}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
