
import Hero from "@/components/hero";
import Review from "@/components/review";
import { Separator } from "@/components/ui/separator"

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Hero2 from "@/components/hero2";
import LogoCarousel from "@/components/LogoCarousel";
import Carousel from "@/components/carousel";
import Hero3 from "@/components/hero3";

const reviews = [
    {
        "user": {
            "name": "kucing imut",
            "address": "California, US"
        },
        "review_stars": 5,
        "review_title": "clean car !",
        "review_text": "the car I use is super clean and like a new car . definately worth to rent ! thank you to this website , I'll do my next rent soon"
    },
    // Add more reviews here...
    {
        "user": {
            "name": "John Doe",
            "address": "New York, US"
        },
        "review_stars": 4,
        "review_title": "Great Service",
        "review_text": "I had a great experience renting from this website. The car was in good condition, and the service was excellent."
    },
    {
        "user": {
            "name": "Alice Smith",
            "address": "London, UK"
        },
        "review_stars": 5,
        "review_title": "Highly Recommend",
        "review_text": "The cars available for rent are fantastic, and the booking process was smooth. Will definitely rent again."
    },
    {
        "user": {
            "name": "Emily Johnson",
            "address": "Chicago, US"
        },
        "review_stars": 5,
        "review_title": "Excellent Experience",
        "review_text": "I rented a car from this website, and it was a fantastic experience. The car was clean and well-maintained, and the customer service was top-notch. I highly recommend it!"
    },
    {
        "user": {
            "name": "David Smith",
            "address": "Los Angeles, US"
        },
        "review_stars": 4,
        "review_title": "Smooth Rental Process",
        "review_text": "Renting a car from this website was a breeze. The booking process was straightforward, and the car was ready on time. The only minor issue was the gas tank not being completely full, but overall, it was a good experience."
    },
    {
        "user": {
            "name": "Sophia Lee",
            "address": "San Francisco, US"
        },
        "review_stars": 5,
        "review_title": "Impressive Selection",
        "review_text": "I was impressed with the wide selection of cars available for rent on this website. I was able to find the perfect car for my trip, and it made my vacation even more enjoyable."
    },
    {
        "user": {
            "name": "Michael Brown",
            "address": "Miami, US"
        },
        "review_stars": 3,
        "review_title": "Decent Rental",
        "review_text": "The car I rented was in decent condition, but I did encounter some minor issues with the air conditioning. It could have been better, but it got the job done."
    }

    // Add more reviews as needed...
];

const carouselImages = [
    '/reviews/1.jpg',
    '/reviews/2.jpg',
    '/reviews/3.jpg',
    '/reviews/4.jpg',
    '/reviews/5.jpg',
    '/reviews/6.jpg',
  ];

export default function Page() {


    return (
        <div>
            <Hero />
            <Hero2 />
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center">
                    <LogoCarousel />
                </div>
            </div>
            <Separator className="my-6"/>
            <Hero3/>
            <Separator className="my-6"/>
            <h1 className="text-6xl font-bold align-middle text-center my-5">Customer Photos</h1>
            <Carousel images={carouselImages}/>

            <Separator className="my-6"/>
            <h1 className="text-6xl font-bold align-middle text-center my-5">Customer Reviews</h1>

            <div className="grid grid-cols-3 space-x-4">
                {reviews.map((review, index) => (
                    <Review key={index} {...review} />
                ))}
            </div>


        </div>
    );
}