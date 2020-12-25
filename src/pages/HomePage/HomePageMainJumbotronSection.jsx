import React from "react";
import CenterButtom from "../../components/CenterButtom";
import MainImage from "../../images/oursky-hero.png";
import CenterButttomStyle from "./HomePageMainJumbotron.module.css";
import styled from "styled-components";

const StyledSection = styled.div`
  .jumbotron-main {
    background-color: #123fae;
    height: 550px;
  }
`;
const HomePageMainJumbotronSection = (probs) => {
  return (
    <StyledSection>
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <p className="display-4 slogan">
                  <b>
                    We design <br />
                    and develop <br />
                    award-winning <br />
                    applications
                  </b>
                </p>
              </div>
              <div className="col-sm-6 ml-auto ">
                <img style={{ width: 500 }} src={MainImage} />
              </div>
            </div>
          </div>
        </div>
        <CenterButtom className={CenterButttomStyle.landing__btn} />
      </div>
    </StyledSection>
  );
};

export default HomePageMainJumbotronSection;
