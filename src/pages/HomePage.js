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

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <Info id="about" /> */}
      {/* <Features id="programs" /> */}

      {/* <div id="events">
				{heroData.map((contentData, index) => (
					<Content {...contentData} key={index} />
				))}
				<EventsSection />
			</div> */}
      <Features />
      <Footer />
    </>
  );
};

export default HomePage;
