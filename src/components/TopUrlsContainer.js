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
    return <div className="">Top 100 Urls</div>;
  }
}

export default TopUrlsContainer;
