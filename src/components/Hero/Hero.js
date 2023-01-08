import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import Navbard from "../Navbar/Navbar";
import { HeroSection, HeroText, ButtonWrapper } from "./HeroStyles";
import { useInView } from "react-intersection-observer";
import Clock from "../clock/Clock";
import Apps from "../timer/timer";
import "./hero.css";
import LandVid from "../bgVideo/LandVid";
import Time from "../Time/Time";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const navigate = useHistory();

  // let interval;

  // const startTimer = () => {
  //   const countDownDate = new Date("May 30,2021 ").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();

  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //     if (distance < 0) {
  //       // Stop Timer

  //       clearInterval(interval.current);
  //     } else {
  //       // Update Timer
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   startTimer();
  // });

  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  const about = () => {
    navigate.push("/aboutNitmun");
  };

  return (
    <>
      <Navbar  /> 
      {/* <Navbard /> */}
      <HeroSection ref={ref} id="hero">
        {/* <Container> */}
        <div className="vid">
          <LandVid />
        </div>
        {/* <Apps /> */}
        {/* <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          /> */}
        {/* <HeroText>NIMTUN XI</HeroText> */}

        <div className="belowrrr">
          <div className="belowrrr1">
            <p className="welcome1">Welcome to NITMUN XI</p>
          </div>
          <div className="belowrrr2">
            <p className="welcome2">
              Upset the convictions with the swords of Diplomacy.
            </p>
          </div>
          <div className="date">20th Jan - 22nd Jan, 2023</div>
        </div>
        {/* </Container> */}
        {/* <ButtonWrapper>
            <Link to="sign-up">
              <Button big onClick={about} className="register">
                Register
              </Button>
            </Link>
      </ButtonWrapper>  */}
        <Link to="register">
          <button data-text="Awesome" class="button" onClick={about}>
            <span class="actual-text">&nbsp;Register&nbsp;</span>
            <span class="hover-text" aria-hidden="true">
              &nbsp;Register&nbsp;
            </span>
          </button>
        </Link>

        <div className="theme">
          <span className="rrr">Rise. Reflect. Revolt.</span>
        </div>
        <div className="timerrr">
          <Time />
        </div>
      </HeroSection>
    </>
  );
};

export default Hero;
