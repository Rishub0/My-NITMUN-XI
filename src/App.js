import React from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutNitmun from "./pages/AboutNitmun";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import AnimatedRoutes from "./components/animatedRoutes/AnimatedRoutes";
//import Footer1 from "./components/Footer/Footer1";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
