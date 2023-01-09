import React from "react";
import { Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
const Landing = () => {
  return (
    <div>
      
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
      
    </div>
  );
};

export default Landing;
