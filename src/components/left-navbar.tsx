'use client'

import Link from "next/link";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { Separator } from "./ui/separator";
import { DocumentChartBarIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";

import { usePathname } from 'next/navigation'
import { useAuth } from "@/context/Auth";



const basic_urls = [
  {
    text: "Home",
    url: "/",
    icon: HomeIcon, // Specify the Heroicon component
  },
  {
    text: "My Rents History",
    url: "/rents",
    icon: ShoppingCartIcon, // Specify the Heroicon component
  },
  {
    text: "My Bookings History",
    url: "/bookings",
    icon: DocumentCheckIcon, // Specify the Heroicon component
  },
  {
    text: "Favorite",
    url: "/favorite",
    icon: StarIcon, // Specify the Heroicon component
  },
  {
    text: "Settings",
    url: "/settings",
    icon: Cog6ToothIcon, // Specify the Heroicon component
  },
];

const admin_urls = [
  {
    text: "Home",
    url: "/",
    icon: HomeIcon, // Specify the Heroicon component
  },
  {
    text: "My Posts",
    url: "/my-posts",
    icon: DocumentChartBarIcon, // Specify the Heroicon component
  },
  {
    text: "My Rent Orders",
    url: "/rents-order",
    icon: DocumentChartBarIcon, // Specify the Heroicon component
  },
  {
    text: "My Booking Orders",
    url: "/bookings-order",
    icon: DocumentChartBarIcon, // Specify the Heroicon component
  },
  // {
  //   text: "My Group",
  //   url: "/group",
  //   icon: DocumentChartBarIcon, // Specify the Heroicon component
  // },
  {
    text: "Locations",
    url: "/locations",
    icon: MapPinIcon, // Specify the Heroicon component
  },
  {
    text: "Settings",
    url: "/settings",
    icon: Cog6ToothIcon, // Specify the Heroicon component
  },
];

const LeftNavBar = () => {

  const pathname = usePathname()

  const {user} = useAuth();

  const renderUrls = (urls: any) => {
    return urls.map((a: any, index: number) => (
      <Link
        href={a.url}
        key={index}
        className={
          pathname === a.url
            ? 'px-4 py-2 hover:bg-lime-200 m-4 rounded-md hover:cursor-pointer flex items-center bg-lime-400'
            : 'px-4 py-2 hover:bg-slate-200 m-4 rounded-md hover:cursor-pointer flex items-center'
        }
      >
        {a.icon && <a.icon className="w-5 h-5 mr-2" />} {a.text}
      </Link>
    ));
  };

  return (
    <nav className="top-20 left-0 w-64 sticky h-screen">
     <div className="overflow-y-auto h-screen py-4">
        {user.role === 'Admin' ? renderUrls(admin_urls) : renderUrls(basic_urls)}
      </div>
    </nav>
  );
};

export default LeftNavBar;
