import React from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutNitmun from "./pages/AboutNitmun";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
//import Footer1 from "./components/Footer/Footer1";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-up" component={SignupPage} />
        <Route path="/aboutNitmun" component={AboutNitmun} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/AboutUs" component={AboutUs}/>
      </Switch>
      
    </Router>
  );
}

export default App;
