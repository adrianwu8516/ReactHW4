import React from "react";
import HomaPageFooterSection from "./HomaPageFooterSection";
import HomePageCaseSection from "./HomePageCaseSection";
import HomePageContactSection from "./HomePageContactSection";
import HomePagegeHeaderSection from "./HomePageHeaderSection";
import HomePageIntroSection from "./HomePageIntroSection";
import HomePageMainJumbotronSection from "./HomePageMainJumbotronSection";
import HomePagePartnersSection from "./HomePagePartnersSection";
import HomePageServiceSection from "./HomePageServiceSection";

const HomePage = () => {
  return (
    <>
      <HomePagegeHeaderSection />
      <div className="App">
        <main>
          <HomePageMainJumbotronSection />
          <HomePageIntroSection />
          <HomePageCaseSection />
          <HomePageServiceSection />
          <HomePagePartnersSection />
          <HomePageContactSection />
        </main>
      </div>
      <HomaPageFooterSection />
    </>
  );
};
export default HomePage;
