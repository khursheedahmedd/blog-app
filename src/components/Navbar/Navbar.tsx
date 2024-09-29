import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../theme-button";

const Navbar = () => {
  return (
    <nav className="bg-background shadow-md py-4 fixed top-0 left-0 w-full z-10 backdrop-blur-3xl  ">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-purple-500">
          KhursheedBlogs
        </Link>
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <Link
              href="/"
              className="text-gray-100 hover:text-purple-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="text-gray-100 hover:text-purple-500 transition duration-300"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-gray-100 hover:text-purple-500 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-gray-100 hover:text-purple-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <div className="">
            <Button className="mx-1" variant="outline">
              Login
            </Button>
            <Button className="mx-1" variant="outline">
              Register
            </Button>
          </div>
          <ModeToggle />
        </ul>
        <Sheet>
          <SheetTrigger className="md:hidden flex justify-center items-center w-8 h-8 bg-purple-500 rounded-full">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-purple-500">
                KhursheedBlogs
              </SheetTitle>

              <ul className="flex flex-col items-center space-y-4 ">
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 hover:text-purple-500 transition duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 hover:text-purple-500 transition duration-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 hover:text-purple-500 transition duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 hover:text-purple-500 transition duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <div className="">
                  <Button className="mx-2" variant="outline" size={"sm"}>
                    Login
                  </Button>
                  <Button className="mx-2" variant="outline" size={"sm"}>
                    Register
                  </Button>
                </div>
                {/* <ModeToggle /> */}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
