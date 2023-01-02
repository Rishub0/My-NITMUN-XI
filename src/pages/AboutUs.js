import React from "react";
<<<<<<< HEAD

const AboutUs = () => {
  return <></>;
=======
import "./AboutUs.css"
import { CgInfo } from "react-icons/cg";
import Content from "../components/Content/Content";
import EventsSection from "../components/EventsSection/EventsSection";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
import { heroData } from "../data/HeroData";
import About from "../components/About/About";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      
        <About />

      <Footer />
    </>
  );
>>>>>>> c78e3165ba446363d302630241c998d0a8c1610c
};

export default AboutUs;
