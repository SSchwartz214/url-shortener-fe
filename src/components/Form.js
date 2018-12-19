import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    original: ""
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
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
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
    );
  }
}

export default Form;
