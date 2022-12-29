import React from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutNitmun from "./pages/AboutNitmun";
import Gallery from "./pages/Gallery";
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
      </Switch>
      
    </Router>
  );
}

export default App;
