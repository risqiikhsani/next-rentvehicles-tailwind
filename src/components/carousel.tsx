"use client"


import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

interface ImageProps {
  images: string[];
}

export default function Carousel({ images }: ImageProps) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((s,index) => {
          return (
            <div className="min-w-full" key={index}>
              <Image
                width={1000}
                height={600}
                src={s}
                alt={`Image ${s + 1}`}
                className="rounded-3xl object-contain mx-auto"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">

        <Button onClick={previousSlide} className="rounded-full">
          &lt;
        </Button>

        <Button onClick={nextSlide} className="rounded-full">
          &gt;
        </Button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}