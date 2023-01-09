import React from "react";
import EventsSection from "../components/EventsSection/EventsSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { motion } from 'framer-motion/dist/framer-motion';

const Gallery = () => {
  return (
    // <motion.div
    // initial={{width: 0}}
    // animate={{width: "100vw"}}
    // exit={{ x: window.innerWidth, transition: {duration: 0.2} }}>
      <div><Navbar />
      <EventsSection />
      <Footer /></div>
    //</motion.div>
  );
};

export default Gallery;
