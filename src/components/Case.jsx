import React from "react";

const Case = (probs) => {
  const { url, name, intro } = probs;
  return (
    <div className="col-sm-4">
      <div className="card bg-dark text-white">
        <img src={url} className="card-img" />
        <div className="card-img-overlay">
          <p className="card-text">Case Study</p>
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{intro}</p>
        </div>
      </div>
    </div>
  );
};

export default Case;
