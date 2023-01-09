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
      <Footer /></div>
      
    </div>
  );
};

export default Landing;
