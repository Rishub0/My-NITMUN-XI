import React from "react";

import { GiPartyFlags, GiMicrophone } from "react-icons/gi";
import { TiGroupOutline } from "react-icons/ti";
const iconStyle = (Icon) => <Icon size="3rem" color="red" />;

export const featuresData = {
  title: "Our Sponsors",
  text: "We are proud to announce our partners.",
  content: [
    {
      name: "Lemon Grass",
      description:
        "Meet wonderful people that share your interests and make friends",
      icon: iconStyle(TiGroupOutline),
      image: "./assets/features/Network.svg",
    },
    {
      name: "Best Events",
      description: "We host the sell tickets to various most desirable events ",
      icon: iconStyle(GiMicrophone),
      image: "./assets/features/Speech.svg",
    },
    {
      name: "Fun",
      description: "We help you making the events more fun",
      icon: iconStyle(GiPartyFlags),
      image: "./assets/features/Fun.svg",
    },
  ],
};
