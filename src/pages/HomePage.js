import React from "react";
import Content from "../components/Content/Content";
import EventsSection from "../components/EventsSection/EventsSection";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
//import Footer1 from "../components/Footer/Footer1";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/Info";
import Modal from "../components/Modal/Modal";
import { heroData } from "../data/HeroData";
import sample from "../asset/Videos/sample.mp4";
import LandVid from "../components/bgVideo/LandVid";
import {motion} from "framer-motion/dist/framer-motion";

const HomePage = () => {
  return (
    //  <motion.div className="home" 
    //  initial={{width: 0}}
    //  animate={{width: "100vw"}}
    //  exit={{ x: window.innerWidth, transition: {duration: 0.2} }}>
    <div>
      <Hero />
      {/* <Info id="about" /> */}
      {/* <Features id="programs" /> */}

      {/* <div id="events">
				{heroData.map((contentData, index) => (
					<Content {...contentData} key={index} />
				))}
				<EventsSection />
			</div> */}
      
      <Footer /></div>
    // </motion.div>
  );
};

export default HomePage;
