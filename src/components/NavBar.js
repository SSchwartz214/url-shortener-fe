import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <h2>
            Url<span className="second-word">Zapper</span>
          </h2>
          <a className="nav-link nav-link-ltr" href="/">
            Home
          </a>
          <a className="nav-link nav-link-ltr" href="/top">
            Top 100
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
