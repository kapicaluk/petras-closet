import React, { Component } from "react";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import addItem from "./addItem";
import Home from './Home';

export default class Routes extends Component {
  render() {
    return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={addItem} />
          </Switch>
    );
  }
}
