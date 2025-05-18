
import React from "react";
import HeaderSection from "../../components/About/HeaderSection";
import MissionSection from "../../components/About/MissionSection";
import ValuesSection from "../../components/About/ValuesSection";
import TeamSection from "../../components/About/TeamSection ";
import FooterCTASection from "../../components/About/FooterCTASection";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      <HeaderSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <FooterCTASection />
    </div>
  );
};

export default AboutPage;
