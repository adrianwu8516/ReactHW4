import React from "react";
import "../../styles.css";

const HomePageIntroSection = () => {
  return (
    <div className="container normalPadding">
      <div className="row">
        <div className="col-sm-6">
          <p>About Us</p>
          <h4>
            <b>
              Oursky is a team of talented developers, designers, data
              scientists, product and project managers and QA engineers working
              from Hong Kong, London, and Taipei. Using cutting-edge
              technologies, we are an end-to-end digital product, web, and
              mobile app development consultancy whose creations have garnered
              millions of downloads and awards from the Apple App Store and Asia
              Smart Apps Awards.
            </b>
          </h4>
        </div>
        <div className="col-sm-6 absoluteCenter">
          <img src="http://qqpublic.qpic.cn/qq_public/0/0-2385313107-53BF300282BE42259065AE4B5944AD24/0?fmt=gif&size=29&h=300&w=300&ppv=1" />
        </div>
      </div>
    </div>
  );
};

export default HomePageIntroSection;
