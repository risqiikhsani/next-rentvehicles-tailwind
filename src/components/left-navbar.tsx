import Link from "next/link";
import React from "react";
import { StarIcon } from '@heroicons/react/24/solid';

const basic_urls = [
  {
    text: "Home",
    url: "/",
    icon: StarIcon, // Specify the Heroicon component
  },
  {
    text: "My Rents History",
    url: "/rents",
    icon: StarIcon, // Specify the Heroicon component
  },
  {
    text: "My Bookings History",
    url: "/bookings",
    icon: StarIcon, // Specify the Heroicon component
  },
  {
    text: "Favorite",
    url: "/favorite",
    icon: StarIcon, // Specify the Heroicon component
  },
];

const LeftNavBar = () => {
  return (
    <nav className="top-20 left-0 bg-gray-800 w-64 text-white sticky h-screen">
      <ul className="py-4">
        {basic_urls.map((a) => {
          const Icon = a.icon; // Extract the icon component
          return (
            <li
              key={a.text}
              className="px-4 py-2 hover:bg-gray-700 m-4 rounded-lg hover:cursor-pointer flex items-center"
            >
              {Icon && <Icon className="w-5 h-5 mr-2" />} {/* Render the icon if available */}
              <Link href={a.url}>{a.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LeftNavBar;
