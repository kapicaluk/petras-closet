import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
   return <header className="App-header">
       <h1 className="App-title">Welcome to Petra's Closet</h1>
       <ul className="App-header-nav">
         <li>
           <Link to="/add">New Item</Link>
         </li>
         <li>
           <Link to="/">Home</Link>
         </li>
       </ul>
     </header>;
  }
}

export default Navigation
