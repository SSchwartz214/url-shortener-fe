import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    original: "",
    newUrl: {},
    error: {}
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
        this.setState({ newUrl: res.data });
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };

  render() {
    let link;

    if (Object.keys(this.state.newUrl).length > 0) {
      link = (
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
      );
    } else if (Object.keys(this.state.error).length > 0) {
      link = <h4>Please enter a valid url</h4>;
    }

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
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
