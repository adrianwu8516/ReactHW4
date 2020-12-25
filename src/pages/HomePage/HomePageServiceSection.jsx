import React from "react";
import ServiceIntro from "../../components/ServiceIntro";
import "../../styles.css";
import styled from "styled-components";

const StyledSection = styled.div`
  .jumbotron-normal {
    background-color: white;
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;
const HomePageServiceSection = () => {
  return (
    <StyledSection>
      <div>
        <div className="container normalPadding">
          <div className="row">
            <div className="col-sm-6">
              <h4>Digital transformation powered by ingenuity</h4>
              <p>
                We don’t just build apps.Oursky creates digital experiences that
                help our partners succeed in today’s fast-paced business
                landscape.
              </p>
              <p>
                We work with founders in creating their blueprints for success —
                from minimum viable products (MVPs) to interactive prototypes.
                Oursky uses an iterative approach to help startups launch
                faster, scale quickly, and deliver great user experience.{" "}
              </p>
              <p>
                Oursky partners with enterprises to fast-track their digital
                transformation, helping them adopt and transition to
                cloud-native technologies and microservices.{" "}
              </p>
              <a href="https://www.oursky.com/services">
                More on our core services
              </a>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title text-muted ">Core Services</h6>
                  <ServiceIntro
                    url="https://www.oursky.com/assets/img/icon-dev.svg"
                    name="Digital Product Development "
                    intro="Accuracy and creativity for <a href='#'>web</a> and <a href='#'>mobile</a>"
                  />
                  <ServiceIntro
                    url="https://www.oursky.com/assets/img/icon-skylab.svg"
                    name="Skylab.AI"
                    intro="Scalable machine learning and artificial intelligence (AI) solutions"
                  />
                  <ServiceIntro
                    url="https://www.oursky.com/assets/img/icon-uiux.webp"
                    name="UI/UX and Digital Product Design"
                    intro="User-centric, intuitive, and immersive digital experience"
                  />
                  <ServiceIntro
                    url="https://www.oursky.com/assets/img/icon-micro.svg"
                    name="Microservices and Containerization"
                    intro="Become cloud native and adopt microservices and continuous integration/delivery (CI/CD)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid jumbotron-normal">
          <div
            className="container"
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title text-muted ">Core Services</h6>
                    <ServiceIntro
                      url="https://www.oursky.com/assets/img/dx-logo-256px.webp"
                      name="FormX.ai"
                      intro="AI-powered data capture and extraction solution"
                    />
                    <ServiceIntro
                      url="https://www.oursky.com/assets/img/icon-authgear.webp"
                      name="Authgear"
                      intro="Authentication as a service for secure login experience"
                    />
                    <ServiceIntro
                      url="https://www.oursky.com/assets/img/icon-gesprek.webp"
                      name="Gesprek.chat"
                      intro="Conversational sales and marketing for businesses"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6" style={{ paddingTop: "50px" }}>
                <h4>We’re your low-code solution for your next IT project. </h4>
                <p>
                  We develop various open-source solutions that can be used by
                  developers and organizations around the world to solve
                  problems.{" "}
                </p>
                <p>
                  At the heart of Oursky is the art of software engineering:
                  translating expertise and ideas into opportunities.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default HomePageServiceSection;
