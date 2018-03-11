import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import Router from "./Router";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header isAuthenticated={this.props.isAuthenticated} />
          <main className="container-fluid main">
            <Router isAuthenticated={this.props.isAuthenticated} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, null)(App);
