import React from "react";
import { CgInfo } from "react-icons/cg";
import About from "../components/About/About";
import Carrds from "../components/Cards/Cards";
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
      <About />
      {/* <Info id="about" /> */}
      <div id="events">
        {heroData.map((contentData, index) => (
          <Content {...contentData} key={index} />
        ))}
        <Carrds />
        {/* <EventsSection/> */}
      </div>
      <Footer />
    </>
  );
};

export default AboutNitmun;
