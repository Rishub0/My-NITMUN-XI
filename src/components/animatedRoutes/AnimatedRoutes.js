import React from 'react'
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/SignupPage';
import AboutNitmun from '../../pages/AboutNitmun';
import AboutUs from '../../pages/AboutUs';
import Gallery from '../../pages/Gallery';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
const AnimatedRoutes = () => {
    const location= useLocation();
  return (
    <AnimatePresence>
    <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={SignupPage} />
        <Route path="/aboutNitmun" component={AboutNitmun} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/aboutUs" component={AboutUs} />
      </Switch>
      </AnimatePresence>
  )
}

export default AnimatedRoutes;