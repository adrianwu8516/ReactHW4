import React from "react";
import Case from "../../components/Case";
import "../../styles.css";
import ASOSImage from "../../images/case/9GbDTLX.png";
import JamnPLAYERImage from "../../images/case/hOa0LMt.png";
import WilsonParkingImage from "../../images/case/9GbDTLX.png";

const HomePageCaseSection = () => {
  return (
    <div className="jumbotron jumbotron-fluid jumbotron-normal">
      <div className="container">
        <div className="card-group">
          <div className="row">
            <Case
              url="https://i.imgur.com/9GbDTLX.png"
              name="ASOS"
              intro="We helped ASOS create a browsing experience where 4,000 new
            fashion items are published weekly."
            />
            <Case
              url="https://i.imgur.com/hOa0LMt.png"
              name="Jamn PLAYER"
              intro="We teamed up with Jamn by MiQ Limited to build the next iteration of an award-winning iOS music app."
            />
            <Case
              url="https://i.imgur.com/jmNLwbv.gif"
              name="Wilson Parking"
              intro="We worked with Wilson Parking to complement its digital
            transformation by revamping their mobile apps."
            />
          </div>
        </div>
        <br />
        <a href="#">Explore more of our work -> </a>
        <br />
        <br />
      </div>
    </div>
  );
};

export default HomePageCaseSection;
