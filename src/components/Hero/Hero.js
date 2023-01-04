import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import Navbar from "../Navbar/Navbar";
import { HeroSection, HeroText, ButtonWrapper } from "./HeroStyles";
import { useInView } from "react-intersection-observer";
import Clock from "../clock/Clock";
//import Apps from "../timer/timer";

const Hero = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const navigate = useHistory();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  const about = () => {
    navigate.push("/aboutNitmun");
  };

  return (
    <>
      <HeroSection ref={ref} id="hero">
        <Container>
          {/* <Apps /> */}
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
          <HeroText>NITMUN XI</HeroText>

          <ButtonWrapper>
            <Link to="sign-up">
              <Button big onClick={about}>
                Register
              </Button>
            </Link>
          </ButtonWrapper>
        </Container>
      </HeroSection>
      <Navbar hide={inView} />
    </>
  );
};

export default Hero;
