import React, { Component } from "react";
import chart from "../images/chart.svg";

class Url extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.url.id);
  };

  render() {
    return (
      <div className="list-tile">
        <span className="deleteButton" onClick={this.handleDelete}>
          {" "}
          x{" "}
        </span>
        <h2>{this.props.url.title}</h2>
        <p className="original">{this.props.url.original}</p>
        <a
          href={`http://localhost:3000/${this.props.url.short}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          http://localhost:3000/
          {this.props.url.short}
        </a>
        <div className="count-box">
          <p>
            <img className="chart" src={chart} alt="chart" />{" "}
            {this.props.url.clicks}
          </p>
        </div>
      </div>
    );
  }
}

export default Url;
