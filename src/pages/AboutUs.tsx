import React from "react";
import OurAuthors from "../components/about-us/OurAuthors";
import OurBonds from "../components/about-us/OurBonds";
import OurMission from "../components/about-us/OurMission";
import TopHeading from "../components/about-us/TopHeading";

const AboutUs = () => {
  return (
    <>
      <TopHeading />
      <OurMission />
      <OurBonds />
      <OurAuthors />
    </>
  );
};

export default AboutUs;
