import React, { Component } from "react";
import axios from "axios";
import Url from "./Url";

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
          return <Url url={url} key={url.id} />;
        })}
      </div>
    );
  }
}

export default TopUrlsContainer;
