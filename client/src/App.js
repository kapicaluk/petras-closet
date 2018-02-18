import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from "./history";
import "./App.css";
import Navigation from "./Navigation";
import Listings from "./Listings";
import Routes from "./Routes";

class App extends Component {
  render() {
    return(
    <Router history={history}>
      <div>
        <Navigation />
        <Routes />
      </div>
    </Router>)
  }
}

export default App;
