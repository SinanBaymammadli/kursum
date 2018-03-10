import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

const isLoggedIn = false;

const UserRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const GuestRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/dashboard", state: { from: props.location } }}
        />
      )
    }
  />
);

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <GuestRoute isLoggedIn={isLoggedIn} path="/login" component={Login} />
        <GuestRoute
          isLoggedIn={isLoggedIn}
          path="/register"
          component={Register}
        />
        <UserRoute
          isLoggedIn={isLoggedIn}
          path="/dashboard"
          component={Dashboard}
        />
      </Switch>
    );
  }
}

export default Router;
