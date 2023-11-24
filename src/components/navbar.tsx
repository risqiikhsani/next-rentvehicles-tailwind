"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ModeToggle from "./ModeToggle";
import { BellIcon } from "@heroicons/react/24/solid";
import { useAuth } from "@/context/Auth";
import { Badge } from "./ui/badge";

export default function NavBar() {

  const { user, logoutUser } = useAuth();

  return (
    <header className="w-full fixed top-0 z-10">
      <nav className="w-full bg-white bg-opacity-90 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <div className="flex justify-center items-center">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={118}
                  height={18}
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex gap-4 items-center">

              {user.ID == 0 ? (
                <>
                  <Button size="lg" asChild><Link href="/auth/login">Login</Link></Button>
                  <ModeToggle />
                </>
              ) : (
                <>
                  <ModeToggle />
                  <Button variant="outline"><BellIcon className="w-4 h-4" /></Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="hover:cursor-pointer hover:border-solid hover:border-4 hover:border-lime-300">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild className="hover:cursor-pointer">
                        <Link href="/settings/profile">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="hover:cursor-pointer" onClick={logoutUser}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Badge>{user.role}</Badge>
                </>

              )}





            </div>


          </div>
        </div>
      </nav>
    </header>
  )

};


