import React from "react";
import LogoDisplay from "../../components/LogoDisplay";
import "../../styles.css";

const HomePagePartnersSection = () => {
  return (
    <div className="container normalPadding">
      <div className="row absoluteCenter">
        <h4>We help companies around the world bring their ideas to life. </h4>
      </div>
      <div className="row" style={{ paddingTop: "50px" }}>
        <LogoDisplay
          urlA="https://www.oursky.com/assets/img/logo__asos.svg"
          urlB="https://www.oursky.com/assets/img/logo__tr.svg"
        />
        <LogoDisplay
          urlA="https://www.oursky.com/assets/img/logo__sc.svg"
          urlB="https://www.oursky.com/assets/img/logo__hlia.svg"
        />
        <LogoDisplay
          urlA="https://www.oursky.com/assets/img/logo__ax.svg"
          urlB="https://www.oursky.com/assets/img/logo__wg.svg"
        />
        <LogoDisplay
          urlA="https://www.oursky.com/assets/img/logo__cm.svg"
          urlB="https://www.oursky.com/assets/img/logo__hkt.svg"
        />
      </div>
    </div>
  );
};

export default HomePagePartnersSection;
