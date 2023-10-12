"use client"

import Link from "next/link";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { Separator } from "./ui/separator";
import {DocumentChartBarIcon} from "@heroicons/react/24/solid";
import {ShieldCheckIcon} from "@heroicons/react/24/solid";
import {UserIcon} from "@heroicons/react/24/solid";
import {ComputerDesktopIcon} from "@heroicons/react/24/solid";
import { usePathname } from 'next/navigation'


const basic_urls = [
  {
    text: "Account",
    url: "/settings/account",
    icon: ShieldCheckIcon, // Specify the Heroicon component
  },
  {
    text: "Profile",
    url: "/settings/profile",
    icon: UserIcon, // Specify the Heroicon component
  },
  {
    text: "Theme",
    url: "/settings/theme",
    icon: ComputerDesktopIcon, // Specify the Heroicon component
  },
];



const LeftNavBarSettings = () => {
  const pathname = usePathname()


  return (
    <nav className="top-20 left-0 w-64 sticky h-screen">
      <div className="overflow-y-auto h-screen py-4">
          {basic_urls.map((a, index) => {
            const Icon = a.icon; // Extract the icon component
            return (
              <Link href={a.url} key={index}
              className={pathname === a.url ? 'px-4 py-2 hover:bg-lime-200 m-4 rounded-md hover:cursor-pointer flex items-center bg-lime-400' :
                'px-4 py-2 hover:bg-slate-200 m-4 rounded-md hover:cursor-pointer flex items-center'}>
                {Icon && <Icon className="w-5 h-5 mr-2" />}{" "}
                {/* Render the icon if available */}
                  {a.text}
                </Link>
            );
          })}
         
      </div>
    </nav>
  );
};

export default LeftNavBarSettings;
