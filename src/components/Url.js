import React from "react";

const Url = ({ url }) => (
  <div className="tile" key={url.short}>
    <p>{url.original}</p>
    <p>{url.title}</p>
    <a
      href={`https://url-shortener--api.herokuapp.com/${url.short}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      https://url-shortener--api.herokuapp.com/
      {url.short}
    </a>
    <p>Total views: {url.clicks}</p>
  </div>
);

export default Url;
