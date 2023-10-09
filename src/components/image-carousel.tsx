"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";

interface ImageProps {
    images: string[];
}

const ImageCarousel = ({ images }: ImageProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        // Automatically advance to the next image every 2 seconds
        const intervalId = setInterval(handleNextClick, 2000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    return (
        <div className="relative flex justify-center items-center">
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-6 rounded-full opacity-80 hover:opacity-100" onClick={handlePrevClick}>
                &lt;
            </button>
            <Image
                width={1000}
                height={666}
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="rounded-3xl h-500 w-800"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-6 rounded-full opacity-80 hover:opacity-100" onClick={handleNextClick}>
                &gt;
            </button>
        </div>

    );
};

export default ImageCarousel;
