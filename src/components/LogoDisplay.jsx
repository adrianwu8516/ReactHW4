import React from "react";

const LogoDisplay = (probs) => {
  const { urlA, urlB } = probs;
  return (
    <div className="col-sm-6" style={{ paddingTop: "10px" }}>
      <div className="row">
        <div className="col-sm-6 absoluteCenter">
          <img style={{ height: 60 }} src={urlA} />
        </div>
        <div className="col-sm-6 absoluteCenter">
          <img style={{ height: 60 }} src={urlB} />
        </div>
      </div>
    </div>
  );
};

export default LogoDisplay;
