"use client";

import Image from "next/image";

// import { CustomButton } from "@components";

const Hero3 = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Rent Car Starting at $20 / day !
        </h1>

        <p className="hero__subtitle">
          Get the best price for best quality compared to other renters
        </p>

        {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/best-price.png" alt="hero" width={300} height={300} className="object-contain my-10 ml-60" />
          <Image src="/best-quality.png" alt="hero" width={300} height={300} className="object-contain my-10 ml-80" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero3;