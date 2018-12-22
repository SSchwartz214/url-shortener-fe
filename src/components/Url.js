import React from "react";

const Url = ({ url }) => (
  <div className="list-tile" key={url.short}>
    <h2>{url.title}</h2>
    <p className="original">{url.original}</p>
    <a
      href={`https://url-shortener--api.herokuapp.com/${url.short}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      https://url-shortener--api.herokuapp.com/
      {url.short}
    </a>
    <div class="count-box">
      <p>Total views: {url.clicks}</p>
      {/* image */}
    </div>
  </div>
);

export default Url;
