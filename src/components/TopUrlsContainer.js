import React, { Component } from "react";
import axios from "axios";

class TopUrlsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topUrls: []
    };
  }

  componentDidMount() {
    axios
      .get("https://url-shortener--api.herokuapp.com/api/v1/top.json")
      .then(response => {
        console.log(response);
        this.setState({ topUrls: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.topUrls.map(url => {
          return (
            <div className="tile" key={url.id}>
              <p>{url.original}</p>
              <p>{url.title}</p>
              <p>{url.short}</p>
              <p>Total views: {url.clicks}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TopUrlsContainer;
