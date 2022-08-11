import React from "react";
import HeroOvarlay from "./HeroOvarlay";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="relative bg-backg">
      <HeroSlider />
      <HeroOvarlay />
    </section>
  );
};

export default Hero;
