import Review from "@/components/review";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import LogoCarousel from "@/components/LogoCarousel";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { motion } from "framer-motion"
import AnimatedFramerY from "@/components/animatedFramerY";
import AnimatedFramerX from "@/components/animatedFramerX";


const reviews = [
  {
    user: {
      name: "kucing imut",
      address: "California, US",
    },
    review_stars: 5,
    review_title: "clean car !",
    review_text:
      "the car I use is super clean and like a new car . definately worth to rent ! thank you to this website , I'll do my next rent soon",
  },
  // Add more reviews here...
  {
    user: {
      name: "John Doe",
      address: "New York, US",
    },
    review_stars: 4,
    review_title: "Great Service",
    review_text:
      "I had a great experience renting from this website. The car was in good condition, and the service was excellent.",
  },
  {
    user: {
      name: "Alice Smith",
      address: "London, UK",
    },
    review_stars: 5,
    review_title: "Highly Recommend",
    review_text:
      "The cars available for rent are fantastic, and the booking process was smooth. Will definitely rent again.",
  },
  {
    user: {
      name: "Emily Johnson",
      address: "Chicago, US",
    },
    review_stars: 5,
    review_title: "Excellent Experience",
    review_text:
      "I rented a car from this website, and it was a fantastic experience. The car was clean and well-maintained, and the customer service was top-notch. I highly recommend it!",
  },
  {
    user: {
      name: "David Smith",
      address: "Los Angeles, US",
    },
    review_stars: 4,
    review_title: "Smooth Rental Process",
    review_text:
      "Renting a car from this website was a breeze. The booking process was straightforward, and the car was ready on time. The only minor issue was the gas tank not being completely full, but overall, it was a good experience.",
  },
  {
    user: {
      name: "Sophia Lee",
      address: "San Francisco, US",
    },
    review_stars: 5,
    review_title: "Impressive Selection",
    review_text:
      "I was impressed with the wide selection of cars available for rent on this website. I was able to find the perfect car for my trip, and it made my vacation even more enjoyable.",
  },
  {
    user: {
      name: "Michael Brown",
      address: "Miami, US",
    },
    review_stars: 3,
    review_title: "Decent Rental",
    review_text:
      "The car I rented was in decent condition, but I did encounter some minor issues with the air conditioning. It could have been better, but it got the job done.",
  },

  // Add more reviews as needed...
];

const carouselImages = [
  "/reviews/1.jpg",
  "/reviews/2.jpg",
  "/reviews/3.jpg",
  "/reviews/4.jpg",
  "/reviews/5.jpg",
  "/reviews/6.jpg",
];

export default function Page() {
  return (
    <div className="w-full">
      {/* <Image src="/bmw2.jpg" height="900" width="600" alt="bmw" className="block w-full h-screen md:hidden"/> */}
      <AnimatedFramerY>
        <div className="relative flex flex-col  md:flex-row-reverse items-center h-screen ">

          <Image
            src="/hero-bg.png"
            alt="hero"
            width="800"
            height="800"
            className="w-max h-max md:h-full md:w-full"
          />
          <div className="absolute w-full h-full flex md:justify-end top-0 md:items-center">
            <Image
              src="/hero.png"
              alt="car"
              width="500"
              height="500"
              className="w-max h-max md:pr-64 pt-10 "
            />
          </div>

          <AnimatedFramerX>
            <div className="md:bg-red-100 md:p-20 md:rounded-r-full">
              <h1 className="hero__title">
                Find, book, rent a car—quick and super easy!
              </h1>

              <p className="hero__subtitle">
                Streamline your car rental experience with our effortless booking
                process.
              </p>
            </div>
          </AnimatedFramerX>

        </div>
      </AnimatedFramerY>

      <Separator className="block md:hidden my-4"/>

      <AnimatedFramerY>
        <div className="relative flex flex-col  md:flex-row items-center h-screen overflow-hidden ">

          <Image
            src="/hero-bg2.png"
            alt="hero"
            width="800"
            height="800"
            className="w-max h-max md:h-full md:w-full"
          />
          <div className="absolute w-full h-full flex md:justify-start top-0 md:items-center">
            <Image
              src="/hero2.png"
              alt="car"
              width="500"
              height="500"
              className="w-max h-max md:pl-64"
            />
          </div>

          <AnimatedFramerX>
            <div className="md:bg-red-100 md:p-20 md:rounded-l-full">
              <h1 className="hero__title">
                Choose more than 50 cars in our garage!
              </h1>

              <p className="hero__subtitle">
                Find any type of cars that you like , including sport cars.
              </p>
            </div>
          </AnimatedFramerX>

        </div>
      </AnimatedFramerY>
      <Separator className="block md:hidden my-4"/>

      {/* <AnimatedFramerY>

        <div className="relative flex flex-col md:flex-row items-center h-screen bg-red-100">
          <Image
            src="/hero-bg2.png"
            alt="hero"
            width="800"
            height="800"
            className="w-max h-max ml-2"
          />
          <div className="absolute w-full h-full flex top-0 md:items-center">
            <Image
              src="/hero2.png"
              alt="car"
              width="500"
              height="500"
              className="w-max h-max md:pb-10 md:pl-20 pt-10 md:pt-0"
            />
          </div>
          <AnimatedFramerX>
            <div>
              <h1 className="hero__title">
                Choose more than 50 cars in our garage!
              </h1>

              <p className="hero__subtitle">
                Find any type of cars that you like , including sport cars.
              </p>
            </div>
          </AnimatedFramerX>

        </div>

      </AnimatedFramerY> */}


      <div className="w-full h-screen p-2">
        <h1 className="hero__title text-center">
          Choose from the best brands in the world !
        </h1>
        <p className="hero__subtitle text-center">
          We have so many brands to choose from.
        </p>
        <div className="text-center">
          <LogoCarousel />
        </div>
      </div>

      <div className="relative hidden md:block">
        <Image src="/bmw.jpg" height="900" width="1980" alt="bmw" className="hidden md:block md:w-full md:h-fit " />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-sky-500 opacity-80 md:p-20 rounded-xl">
          <h1 className="hero__title">
            Find your favorite car now !
          </h1>
          <p className="hero__subtitle">
            We provide you a lot of types of cars.
          </p>
        </div>
      </div>


      <AnimatedFramerY>
        <div className="relative flex flex-col  md:flex-row-reverse items-center h-screen bg-orange-100 dark:bg-inherit p-2 md:gap-20">
          <Image
            src="/hero-bg.png"
            alt="hero"
            width="800"
            height="800"
            className="w-max h-max"
          />
          <div className="absolute w-full h-full flex md:justify-end top-0 md:items-center">
            <Image
              src="/best-price.png"
              alt="car"
              width="300"
              height="300"
              className="w-max h-max "
            />
            <Image
              src="/best-quality.png"
              alt="car"
              width="300"
              height="300"
              className="h-fit w-32 md:w-max md:h-max"
            />
          </div>
          <AnimatedFramerX>
            <div>
              <h1 className="hero__title">
                Rent Car Starting at $20 / day !
              </h1>

              <p className="hero__subtitle">
                Get the best price for best quality compared to other renters
              </p>
            </div>
          </AnimatedFramerX>

        </div>
      </AnimatedFramerY>
      <div className="flex flex-col items-center justify-center p-2 md:h-screen md:bg-red-100 dark:bg-inherit">
        <div className="h-fit flex justify-center  md:items-center p-2 md:p-10 rounded-2xl shadow-xl hover:cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <h1 className="text-lg md:text-6xl font-bold text-center my-5">
            Try searching for our cars!
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 md:w-40 md:h-40 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <p className="my-10 md:text-3xl font-light">
          Search cars and see the prices for free, without making an account!
        </p>
      </div>

      <div className="md:h-screen flex flex-col justify-center gap-4">
        <h1 className="text-6xl font-bold align-middle text-center">
          Customer Photos
        </h1>
        <Carousel images={carouselImages} />
      </div>


      <Separator className="my-6" />
      <div className="p-2">
        <h1 className="text-6xl font-bold align-middle text-center my-5 px-2">
          Customer Reviews
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
          {reviews.map((review, index) => (
            <AnimatedFramerX key={index}>
              <Review key={index} {...review} />
            </AnimatedFramerX>
          ))}
        </div>
      </div>

    </div>
  );
}
