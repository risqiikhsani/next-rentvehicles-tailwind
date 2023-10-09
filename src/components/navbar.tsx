import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NavBar = () => (
  <header className="w-full fixed top-0 z-10">
    <nav className="w-full bg-white bg-opacity-90">
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
          <Button size="lg">Login</Button>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;
