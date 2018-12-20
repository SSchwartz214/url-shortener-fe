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
        console.log(res);
        this.setState({ newUrl: res.data });
      })
      .catch(error => {
        console.log(error.response);
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
        {Object.keys(this.state.newUrl).length > 0 && (
          <a
            href={`https://url-shortener--api.herokuapp.com/api/v1/${
              this.state.newUrl.short
            }`}
            target="_blank"
          >
            https://url-shortener--api.herokuapp.com/api/v1/
            {this.state.newUrl.short}
          </a>
        )}
      </div>
    );
  }
}

export default Form;
