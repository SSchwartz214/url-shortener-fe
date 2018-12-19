import React, { Component } from "react";
import "./App.css";
import UrlsContainer from "./components/TopUrlsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Url Shortener</h1>
        </header>
        <UrlsContainer />
      </div>
    );
  }
}

export default App;
