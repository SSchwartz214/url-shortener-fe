import React from "react";

const Url = ({ url }) => (
  <div className="tile" key={url.short}>
    <p>{url.original}</p>
    <p>{url.title}</p>
    <p>https://url-shortener--api.herokuapp.com/{url.short}</p>
    <p>Total views: {url.clicks}</p>
  </div>
);

export default Url;
