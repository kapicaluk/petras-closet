import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Listings from "./Listings";
import Routes from "./Routes";
import addItem from "./addItem";
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Listings />
      </div>
    );
  }
}

export default Home;
