import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import Header from "./components/Header/Header";
// import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main className="container-fluid">
            <Router />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
