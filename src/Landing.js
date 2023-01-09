import React from "react";
import { Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
import OtherFooter from "./components/Footer/OtherFooter";
import Hero from "./components/Hero/Hero";
const Landing = () => {
  return (
    <div>
      
      <div>
      <Hero />
      <OtherFooter /></div>
      
    </div>
  );
};

export default Landing;
