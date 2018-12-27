import React from "react";
import chart from "../images/chart.svg";

const Url = ({ url }) => (
  <div className="list-tile">
    <h2>{url.title}</h2>
    <p className="original">{url.original}</p>
    <a
      href={`https://url-zapper-be.herokuapp.com/${url.short}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      https://url-shortener--api.herokuapp.com/
      {url.short}
    </a>
    <div className="count-box">
      <p>
        <img className="chart" src={chart} alt="chart" /> {url.clicks}
      </p>
    </div>
  </div>
);

export default Url;
