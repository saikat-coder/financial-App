
import React from "react";
import FullImageSection from "../../components/Home/FullImageSection";
import HomeHeroSection from "../../components/Home/HomeHeroSection";
import { FeaturesSection } from "../../components/FeaturesSection";
import FooterSection  from "../../components/Home/FooterSection";
import SpendSmartlySection from "../../components/Home/SpendSarmtlySession";
import Steps from "../../components/Home/Steps";

// Main App Component
const HomePage= () => {
  return (
    <div>
  
      <FullImageSection />
      <   HomeHeroSection />
      <SpendSmartlySection/>
      <FeaturesSection />
      <Steps/>
      <FooterSection />
    </div>
  );
};

export default HomePage;
