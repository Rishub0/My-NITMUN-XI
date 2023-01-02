import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  background: url("./assets/bgw.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  object-fit: contain;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(1rem, 2.5vw, 2.3rem);
  font-weight: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: brown;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.4rem;
`;
