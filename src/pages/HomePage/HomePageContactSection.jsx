import React from "react";
import "../../styles.css";
import styled from "styled-components";

const StyledSection = styled.div`
  .contactUs {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #1c274a;
  }
`;

const HomePageContactSection = () => {
  return (
    <StyledSection>
      <div className="container-fluid contactUs">
        <div className="container">
          <h3 className="absoluteCenter" style={{ color: "white" }}>
            We build award-winning digital products.
          </h3>
          <h2 className="absoluteCenter" style={{ color: "white" }}>
            Oursky can help you create one.
          </h2>
          <p></p>
          <span className="absoluteCenter">
            <button type="button" className="btn btn-warning">
              <span style={{ color: "white" }}>Let’s talk!</span>
            </button>
          </span>
        </div>
      </div>
    </StyledSection>
  );
};

export default HomePageContactSection;
