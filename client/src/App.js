import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Listings from './Listings'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Petra's Closet</h1>
          <Listings />
        </header>
      </div>
    );
  }
}

export default App;
