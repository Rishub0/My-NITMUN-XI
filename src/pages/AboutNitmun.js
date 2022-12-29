import React from "react";
import { CgInfo } from "react-icons/cg";
import Content from "../components/Content/Content";
import EventsSection from "../components/EventsSection/EventsSection";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
import { heroData } from "../data/HeroData";
const AboutNitmun = () => {
  return (
    <>
      <Navbar />
      {/* <Info id="about" /> */}
      <div id="events">
        {heroData.map((contentData, index) => (
          <Content {...contentData} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AboutNitmun;
