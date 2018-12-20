import React, { Component } from "react";
import axios from "axios";
import Url from "./Url";

class TopUrlsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topUrls: []
      // loading:false,
      // error: false
    };
  }

  componentDidMount() {
    // this.setState({loading: true})
    axios
      .get("https://url-shortener--api.herokuapp.com/api/v1/top.json")
      .then(response => {
        this.setState({
          topUrls: response.data
          // loading: false
        });
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    // if (this.state.loading) {
    //   return <h1>Loading...</h1>
    // }
    // if (this.state.error) {
    //   return <h1>this.state.error</h1>
    // }
    return (
      <div>
        <header className="main-header">
          <h1>Top Urls</h1>
        </header>
        <div>
          {this.state.topUrls.map(url => {
            return <Url url={url} key={url.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default TopUrlsContainer;
