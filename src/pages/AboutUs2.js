import React from "react";
// import "./AboutUs.css"
import { CgInfo } from "react-icons/cg";
import Content from "../components/Content/Content";
import EventsSection from "../components/EventsSection/EventsSection";
import Features from "../components/Features/Features";
import OtherFooter from "../components/Footer/OtherFooter";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
import { heroData } from "../data/HeroData";
import About from "../components/About/About";
import Apps from "../components/timer/timer";
import Time from "../components/Time/Time";
import { motion } from 'framer-motion/dist/framer-motion';
// import About from "../components/About/About";
const AboutUs2 = () => {
  
  return (
    // <motion.div 
    // initial={{width: 0}}
    // animate={{width: "100vw"}}
    // exit={{ x: window.innerWidth, transition: {duration: 0.2} }}>
    <div> <Navbar />
        
         <About />

      <OtherFooter /></div>
    // </motion.div>
  );
};

export default AboutUs2;
