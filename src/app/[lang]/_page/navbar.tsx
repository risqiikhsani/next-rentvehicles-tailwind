"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "@/components/ModeToggle";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/solid";
import { useAuth } from "@/context/Auth";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LeftNavBarMobile from "./Left-navbar-mobile";
import { Locale } from "@/i18n.config";
import LocaleSwitcher from "@/components/locale-switcher";
import CustomLink from "@/components/CustomLink";


export default function NavBar({ lang }: { lang: Locale }) {
  const { user, logoutUser } = useAuth();

  return (
    <header className="w-full fixed top-0 z-10">
      <nav className="w-full bg-white bg-opacity-40 dark:bg-slate-900">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6"> */}

        <div className="flex items-center p-4 gap-2">
          {user.ID != 0 && (
            <Sheet>
              <SheetTrigger asChild className="block md:hidden">
                <Button variant="outline">
                  <Bars3Icon className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" >
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <LeftNavBarMobile lang={lang} />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          )}
          <CustomLink lang={lang} href="/">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <h2 className="font-extrabold text-2xl">NovaCars</h2>
            </div>
          </CustomLink>
          <div className="grow"></div>
          <LocaleSwitcher />
          <ModeToggle />
          {user.ID == 0 ? (
            <Button size="lg" asChild>
              <CustomLink lang={lang} href="/auth/login">Login</CustomLink>
            </Button>
          ) : (
            <>
              <Button variant="outline" size="icon">
                <BellIcon className="w-4 h-4" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="hover:cursor-pointer hover:border-solid hover:border-4 hover:border-lime-300"
                >
                  <Avatar>
                    <AvatarImage src="/others/userdefault.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <Badge className="block md:hidden">{user.role}</Badge>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="hover:cursor-pointer">
                    <CustomLink lang={lang} href={`/settings/account`}>Account</CustomLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:cursor-pointer">
                    <CustomLink lang={lang} href={`/settings/profile`}>Profile</CustomLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:cursor-pointer">
                    <CustomLink lang={lang} href={`/settings/theme`}>Theme</CustomLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:cursor-pointer"
                    onClick={logoutUser}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Badge className="hidden md:block">{user.role}</Badge>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
