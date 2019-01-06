import React, { Component } from "react";
import axios from "axios";
import Url from "./Url";
import loading from "../images/loading.gif";
import update from "immutability-helper";

class TopUrlsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topUrls: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://localhost:3000/api/v1/top.json")
      .then(response => {
        this.setState({
          topUrls: response.data,
          loading: false
        });
      })
      .catch(error => this.setState({ error: error.message }));
  }

  deleteUrl = id => {
    axios
      .delete(`http://localhost:3000/api/v1/urls/${id}`)
      .then(response => {
        const urlIndex = this.state.topUrls.findIndex(x => x.id === id);
        const topUrls = update(this.state.topUrls, {
          $splice: [[urlIndex, 1]]
        });
        this.setState({ topUrls: topUrls });
      })
      .catch(error => console.log(error));
  };

  render() {
    if (this.state.loading) {
      return <img className="loading" src={loading} alt="loading" />;
    }
    if (this.state.error) {
      return <h1>this.state.error</h1>;
    }
    return (
      <div>
        <header className="main-header">
          <h1 className="top-title">Top Urls</h1>
        </header>
        <div className="list-container">
          {this.state.topUrls.map(url => {
            return <Url url={url} key={url.id} onDelete={this.deleteUrl} />;
          })}
        </div>
      </div>
    );
  }
}

export default TopUrlsContainer;
