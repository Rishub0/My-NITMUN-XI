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
import { motion } from "framer-motion/dist/framer-motion";
import Landing from "../Landing";
import { useState } from "react";
import { useEffect } from "react";
import { RingLoader } from "react-spinners";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="ring-style">
          <RingLoader color="#ffffff" loading={loading} size={150} />
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
};

export default HomePage;
