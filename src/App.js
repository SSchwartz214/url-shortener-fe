import React, { Component } from "react";
import "./App.css";
import Router from "./components/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Url Shortener</h1>
        </header>
        <Router />
      </div>
    );
  }
}

export default App;
