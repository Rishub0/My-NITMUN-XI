import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section id="about1">
        <h1 className="headings">ABOUT NITMUN</h1>
        <br></br>
        <div id="pic">
          <img src="./assets/nitmunimg.jpeg" alt="" />
          <div id="intro">

            <p className="para-style">
              Literary Circle is the club in NIT Durgapur, which gives the college an extra.
              NITMUN is a forum convened by the members of the Literary Circle for discussion and analysis of global issues. It seeks to bring out motivated delegates from all over the country for brainstorming and discussing over significant international issues.<br/>

NITMUN promises a challenging yet a very entertaining time to all delegates. Our greatest goal is to make sure that each delegate learns how to tackle world issues better at the end of the conference as the world is in dire need of young leaders now.<br/>

Currently in its 11th edition, NITMUN has been extremely successful in providing the perfect experience to each delegate. Over the years, we have entertained more than 1000 delegates in total. Delegates arrive from all corners of India for an experience they will never forget.<br/>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;