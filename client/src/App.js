import React, { Component } from 'react';
import './App.css';
import Listings from './Listings'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Petra's Closet</h1>
          <ul className="App-header-nav">
          <li> link </li>
          <li> link </li>
          <li> link </li>
          </ul>
          <Listings />
        </header>
      </div>
    );
  }
}

export default App;
