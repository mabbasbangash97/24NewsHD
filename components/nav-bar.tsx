"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavBarProps {
  urdu?: boolean;
}

export function NavBar({ urdu }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "MATCHES", href: "#" },
    { name: "RANKINGS", href: "#" },
    { name: "NEWS", href: "#" },
    { name: "VIDEOS", href: "#" },
    { name: "TEAMS", href: "#" },
    { name: "AWARDS", href: "#" },
    { name: "TRAVEL", href: "#" },
    { name: "اردو", href: "/urdu" },
  ];
  const navItemsUrdu = [
    { name: "میچز", href: "#" },
    { name: "درجہ بندی", href: "#" },
    { name: "خبریں", href: "#" },
    { name: "ویڈیوز", href: "#" },
    { name: "ٹیمیں", href: "#" },
    { name: "ایوارڈز", href: "#" },
    { name: "سفر", href: "#" },
    { name: "English", href: "/" },
  ];

  return (
    <>
      {urdu ? (
        <nav
          className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
            isScrolled ? "bg-[#001B39]" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between flex-row-reverse">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://24newshd.tv/uploads/theme/logo-1580807238.png"
                  alt="ICC Logo"
                  width={60}
                  height={30}
                  className="h-8 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-row-reverse items-center space-x-reverse space-x-6 text-sm font-medium">
                {navItemsUrdu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white font-extrabold hover:text-blue-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-reverse space-x-4">
                <Button variant="ghost" size="icon" className="text-white">
                  <Search className="h-5 w-5" />
                </Button>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden text-white"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] bg-[#001B39] border-none p-0"
                  >
                    <SheetHeader className="p-6 border-b border-gray-800">
                      <SheetTitle className="text-white">مینو</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col py-6">
                      {navItemsUrdu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="px-6 py-3 text-white hover:bg-blue-900/50 transition-colors text-right"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className={`fixed top-0 left-0 w-screen right-0 z-40 transition-colors duration-300 ${
            isScrolled ? "bg-[#001B39]" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://24newshd.tv/uploads/theme/logo-1580807238.png"
                  alt="ICC Logo"
                  width={60}
                  height={30}
                  className="h-8 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white font-extrabold hover:text-blue-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-white">
                  <Search className="h-5 w-5" />
                </Button>

                {/* Mobile Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden text-white"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[300px] bg-[#001B39] border-none p-0"
                  >
                    <SheetHeader className="p-6 border-b border-gray-800">
                      <SheetTitle className="text-white">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col py-6">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="px-6 py-3 text-white hover:bg-blue-900/50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
