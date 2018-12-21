import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    original: "",
    newUrl: {}
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
        this.setState({ newUrl: res.data });
      })
      .catch(error => {
        return error.response;
      });
  };

  render() {
    return (
      <div>
        <div>
          <header className="main-header">
            <h2>Url Shortener</h2>
          </header>
          <form onSubmit={this.handleSubmit}>
            <label>
              Please Enter Url:
              <input
                type="text"
                original="original"
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Shorten url</button>
          </form>
        </div>
        {(Object.keys(this.state.newUrl).length > 0 &&
          this.state.newUrl.short !== undefined && (
            <a
              href={`https://url-shortener--api.herokuapp.com/${
                this.state.newUrl.short
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://url-shortener--api.herokuapp.com/api/v1/
              {this.state.newUrl.short}
            </a>
          )) ||
          (Object.keys(this.state.newUrl).length > 0 && (
            <h4>Please enter a valid url</h4>
          ))}
      </div>
    );
  }
}

export default Form;
