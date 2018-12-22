import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    original: "",
    newUrl: {},
    error: null
  };

  handleChange = event => {
    this.setState({ original: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const url = {
      original: this.state.original
    };

    axios
      .post("https://url-shortener--api.herokuapp.com/api/v1/url", { url })
      .then(res => {
        console.log(res);
        this.setState({ newUrl: res.data, original: "", error: null });
      })
      .catch(error => {
        this.setState({ error: error, newUrl: {} });
      });
  };

  render() {
    let link;

    if (Object.keys(this.state.newUrl).length > 0) {
      link = (
        <div className="card">
          <a
            href={`https://url-shortener--api.herokuapp.com/${
              this.state.newUrl.short
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://url-shortener--api.herokuapp.com/
            {this.state.newUrl.short}
          </a>
        </div>
      );
    } else if (this.state.error) {
      link = (
        <div className="card">
          <h4>Please enter a valid URL (must contain https:// or http://) </h4>
        </div>
      );
    }

    return (
      <div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.original}
              original="original"
              onChange={this.handleChange}
              placeholder="Enter URL..."
            />
            <button type="submit">Zap</button>
          </form>
        </div>
        {link}
      </div>
    );
  }
}

export default Form;
