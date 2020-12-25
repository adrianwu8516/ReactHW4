import React from "react";

const ServiceIntro = (probs) => {
  const { url, name, intro } = probs;
  return (
    <div className="row">
      <div className="col-sm-2 absoluteCenter">
        <img style={{ width: 40 }} src={url} />
      </div>
      <div className="col-sm-10">
        <b>
          <br />
          {name}
        </b>
        <br />
        <p dangerouslySetInnerHTML={{ __html: intro }}></p>
      </div>
    </div>
  );
};

export default ServiceIntro;
