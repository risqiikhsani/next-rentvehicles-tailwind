import Hero from "@/components/hero";
import Review from "@/components/review";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Hero2 from "@/components/hero2";
import LogoCarousel from "@/components/LogoCarousel";
import Carousel from "@/components/carousel";
import Hero3 from "@/components/hero3";
import Image from "next/image";

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
    <div>
      <div className="relative flex flex-col  md:flex-row-reverse items-center ">
        <Image
          src="/hero-bg.png"
          alt="hero"
          width="800"
          height="800"
          className="w-max h-max"
        />
        <div className="absolute w-full h-full flex md:justify-end top-0 md:items-end">
          <Image
            src="/hero.png"
            alt="car"
            width="500"
            height="500"
            className="w-max h-max md:pb-10 md:pr-64 pt-10 md:pt-0"
          />
        </div>
        <div>
          <h1 className="hero__title">
            Find, book, rent a car—quick and super easy!
          </h1>

          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
        </div>
      </div>


      <div className="relative flex flex-col md:flex-row items-center">
        <Image
          src="/hero-bg2.png"
          alt="hero"
          width="800"
          height="800"
          className="w-max h-max"
        />
        <div className="absolute w-full h-full flex top-0 md:items-end">
          <Image
            src="/hero2.png"
            alt="car"
            width="500"
            height="500"
            className="w-max h-max md:pb-10 md:pl-20 pt-10 md:pt-0"
          />
        </div>
        <div>
          <h1 className="hero__title2">
            Choose more than 50 cars in our garage!
          </h1>

          <p className="hero__subtitle2">
            Find any type of cars that you like , including sport cars.
          </p>
        </div>
      </div>

      {/* <Hero />
      <Hero2 /> */}
      {/* <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="text-center">
          <LogoCarousel />
        </div>
      </div> */}
      <Separator className="my-6" />
      {/* <Hero3 /> */}
      {/* <div className="relative flex flex-row-reverse items-center">
        <Image
          src="/hero-bg.png"
          alt="hero"
          width="800"
          height="800"
          className="w-max h-max"
        />
        <div className="absolute w-full h-full flex justify-end items-end gap-20 ">
          <Image
            src="/best-price.png"
            alt="hero"
            width={300}
            height={300}
            className="py-10"
          />
          <Image
            src="/best-quality.png"
            alt="hero"
            width={300}
            height={300}
            className="h-max w-max"
          />
        </div>
        <div>
          <h1 className="hero__title">Rent Car Starting at $20 / day !</h1>

          <p className="hero__subtitle">
            Get the best price for best quality compared to other renters
          </p>
        </div>
      </div> */}
      <Separator className="my-6" />
      <div className="flex flex-col items-center justify-center my-20">
        <div className="flex p-10 rounded-2xl shadow-xl hover:cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <h1 className="md:text-6xl font-bold text-center my-5">
            Try searching for our cars!
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-40 h-40"
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

      <Separator className="my-6" />
      <h1 className="text-6xl font-bold align-middle text-center my-5">
        Customer Photos
      </h1>
      <Carousel images={carouselImages} />

      <Separator className="my-6" />
      <h1 className="text-6xl font-bold align-middle text-center my-5">
        Customer Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
}
