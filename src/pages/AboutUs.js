import React from "react";
// import "./AboutUs.css"
import { CgInfo } from "react-icons/cg";
import Content from "../components/Content/Content";
import EventsSection from "../components/EventsSection/EventsSection";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
import { heroData } from "../data/HeroData";
import About from "../components/About/About";
import Apps from "../components/timer/timer";
import Time from "../components/Time/Time";
// import About from "../components/About/About";
const AboutUs = () => {
  
  return (
    <>
      <Navbar />
        
        <About />

      <Footer />
    </>
  );
};

export default AboutUs;
