import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="IT Club Logo"
            width={136}
            height={64}
            className="h-[64px] w-[136px] object-contain"
          />
          <span className="text-2xl md:hidden lg:block">BUGEMA IT CLUB</span>
        </div>
        <nav className="hidden md:flex md:mr-20 items-center gap-6">
          <Link href="/" className="text-lg">
            Home
          </Link>
          <Link href="/event" className="text-lg font-normal">
            Events
          </Link>
          <Link href="#" className="text-lg font-normal">
            Projects
          </Link>
          <Link href="#" className="text-lg font-normal">
            Team
          </Link>
          <Link href="/blogs" className="text-lg font-normal">
            Blogs
          </Link>
          <Button variant="default">Join Us Now</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
