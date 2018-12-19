import React from "react";

const Url = ({ url }) => (
  <div className="tile" key={url.id}>
    <p>{url.original}</p>
    <p>{url.title}</p>
    <p>{url.short}</p>
    <p>Total views: {url.clicks}</p>
  </div>
);

export default Url;
