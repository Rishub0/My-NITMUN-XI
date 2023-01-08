import React from "react";
import { CgInfo } from "react-icons/cg";
import About from "../components/About/About";
import Carrds from "../components/Cards/Cards";
import Content from "../components/Content/Content";
import EventsSection from "../components/EventsSection/EventsSection";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
//import Timeline from "../components/Timeline/Timeline";
import { heroData } from "../data/HeroData";
import { motion } from 'framer-motion/dist/framer-motion';

const AboutNitmun = () => {
  return (
    // <motion.div 
    //  initial={{width: 0}}
    //  animate={{width: "100vw"}}
    //  exit={{ x: window.innerWidth, transition: {duration: 0.2} }}>
     <div> <Navbar />
      <About />
      {/* <Timeline /> */}
      {/* <Info id="about" /> */}
      <div id="events">
        {heroData.map((contentData, index) => (
          <Content {...contentData} key={index} />
        ))}
        <Carrds />
        {/* <EventsSection/> */}
        <Features />
      </div>
      <Footer /></div>
    // </motion.div>
  );
};

export default AboutNitmun;
