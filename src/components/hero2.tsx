"use client";

import Image from "next/image";

// import { CustomButton } from "@components";

const Hero2 = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero2">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title2">
          Choose more than 50 cars in our garage!
        </h1>

        <p className="hero__subtitle2">
            Find any type of cars that you like , including sport cars.
        </p>

        {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
      </div>
      <div className="hero__image-container2">
        <div className="hero__image2">
          <Image src="/hero2.png" alt="hero" fill sizes="100%" className="object-contain " />
        </div>

        <div className="hero__image-overlay2" />
      </div>
    </div>
  );
};

export default Hero2;