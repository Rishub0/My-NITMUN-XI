import React, { useEffect, useState } from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutNitmun from "./pages/AboutNitmun";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
//import Footer1 from "./components/Footer/Footer1";
import { RingLoader } from "react-spinners";
import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyle />
        <AnimatedRoutes />
        </Router>
    </div>
  );
}

export default App;
