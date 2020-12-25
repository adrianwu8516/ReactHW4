import React from "react";
import "../../styles.css";
import styled from "styled-components";

const StyledSection = styled.div`
  .footer {
    background-color: #333333;
  }

  .text-footer {
    color: #888888;
  }

  .deepFooter {
    background-color: black;
  }
`;

const HomaPageFooterSection = () => {
  return (
    <StyledSection>
      <div>
        <footer className="footer">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md">
                <h2 style={{ color: "white" }}>Oursky</h2>
              </div>
              <div className="col-6 col-md">
                <p className="text-footer">
                  <b>Products</b>
                </p>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-footer" href="#">
                      Authgear
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      FormX.ai
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Gesprek
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <p className="text-footer">
                  <b>Services</b>
                </p>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-footer" href="#">
                      Digital Product Development
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Web App Development
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      UI/UX and Digital Product Design
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Machine Learning Solutions (Skylab.ai)
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Microservices and Containerization
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Know More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <p className="text-footer">
                  <b>About Us</b>
                </p>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-footer" href="#">
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Oursky Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Engineering Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Open-Source Projects
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Connect
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <p className="text-footer">
                  <b>Connect</b>
                </p>
                <ul className="list-unstyled text-small">
                  <li>
                    <a className="text-footer" href="#">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Service Enquiry
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Find Us
                    </a>
                  </li>
                  <li>
                    <a className="text-footer" href="#">
                      Join Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="deepFooter">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md">
                <a className="text-muted" href="#">
                  hello@oursky.com
                </a>
              </div>
              <div className="ml-auto">
                <p className="text-muted"> &copy; Oursky Ltd. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default HomaPageFooterSection;
