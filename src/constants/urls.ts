import { DocumentCheckIcon, HomeIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";

import { Cog6ToothIcon, DocumentChartBarIcon, MapPinIcon } from "@heroicons/react/24/solid";

import { ComputerDesktopIcon, ShieldCheckIcon, UserIcon } from "@heroicons/react/24/solid";

export const basic_urls = [
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
  }
];

export const admin_urls = [
  {
    text: "Home",
    url: "/",
    icon: HomeIcon, // Specify the Heroicon component
  },
  {
    text: "Dashboard",
    url: "/dashboard",
    icon: DocumentChartBarIcon, // Specify the Heroicon component
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
  {
    text: "Locations",
    url: "/locations",
    icon: MapPinIcon, // Specify the Heroicon component
  }
];


export const setting_urls = [
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