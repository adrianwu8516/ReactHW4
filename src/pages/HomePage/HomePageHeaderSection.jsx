import React from "react";
import "../../styles.css";
import styled from "styled-components";

const StyledSection = styled.div`
  .navbar {
    background-color: #123fae;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .navBtn {
    padding-left: 20px;
    padding-right: 20px;
    color: white;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .navItem {
    color: white;
  }
`;

const HomePagegeHeaderSection = () => {
  return (
    <StyledSection>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <span className="logo">OURSKY</span>
            </a>
            <div className="ml-auto">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link navItem" href="#">
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navItem" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navItem" href="#">
                      Resources
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navItem" href="#">
                      About Us
                    </a>
                  </li>
                  <div className="navBtn">
                    <button type="button" className="btn btn-warning navBtn">
                      Start your project
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </StyledSection>
  );
};

export default HomePagegeHeaderSection;
