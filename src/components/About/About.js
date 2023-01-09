import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section id="about">
        <h1 className="headings">ABOUT US</h1>
        <br></br>
        <div id="pic">
          <img src="./assets/bestlc.jpg" alt="" />
          <div id="intro">

            <p className="para-style">
              Literary Circle is the club in NIT Durgapur, which gives the college an extra
									dimension of creative expression in the
									midst of technical unilateralism and gives the students of the college an
									opportunity to transcend the ordinary and
									mundane. The Literary Circle conducts various events throughout the year.<br/><br/>
									The club is known to be highly selective in its admission of new
									members, with only about 10-15 students
									inducted out of the entire batch of 900 each year. Great believers of the phrase
									‘quality over quantity’, the members
									selected every year are the best of the best in the field of expression and
									creativity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;