import React from "react";
import GlobalStyle from "./globalStyles";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AboutNitmun from "./pages/AboutNitmun";
import Gallery from "./pages/Gallery";
<<<<<<< HEAD
import Sponsors from "./pages/Sponsors";
=======
>>>>>>> c78e3165ba446363d302630241c998d0a8c1610c
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
<<<<<<< HEAD
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
      <Footer />
=======
        <Route path="/AboutUs" component={AboutUs}/>
      </Switch>
      
>>>>>>> c78e3165ba446363d302630241c998d0a8c1610c
    </Router>
  );
}

export default App;
