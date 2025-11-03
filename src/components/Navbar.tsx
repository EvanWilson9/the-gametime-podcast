'use client';
import Image from "next/image";
import Logo from "../assets/gametime-logo.png";
import React, { useEffect, useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  const navs = [
    {
        label: "Home",
        href: "home"
    },
    {
        label: "About",
        href: "about"
    },
    {
        label: "Merch",
        href: "merch"
    },
    {
        label: "Socials",
        href: "socials"
    }
  ]

  // Navigation links
  const navList = (
    <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-8 text-lg">
      {navs.map((item, index) => (
        <a href={`#${item.href}`} key={index} className="">
        <li onClick={()=> setIsOpen(false)}
          className="cursor-pointer text-white font-semibold hover:text-gray-500 transition">
          {item.label}
        </li>
        </a>
      ))}
    </ul>
  );

  return (
    <header
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        scrollActive ? "shadow-md py-2 bg-[#0c121d]" : "py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            width={45}
            height={45}
            alt="Logo"
            className="rounded-md"
          />
          <div className="font-bold text-2xl text-white">
            GameTime Network
          </div>
        </div>

        {/* Right: Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navList}
          <a href="https://www.youtube.com/@Game_Time_Podcast" target="_blank">
            <button className="cursor-pointer bg-[#be4725] text-white px-4 py-2 rounded-[9px] hover:bg-[#a73b24] transition-all duration-200 font-semibold">
              Subscribe
            </button>
          </a>
        </div>

        {/* Right: Mobile Button */}
        <button
          onClick={handleOpenNav}
          className="lg:hidden p-2 rounded-md text-white text-2xl transition"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0c121d] p-7 border-t-3 border-[#a73b24]">
          {navList}
          <a href="https://www.youtube.com/@Game_Time_Podcast" target="_blank">
            <button className="cursor-pointer mt-4 w-full border border-black bg-white text-[#0d1723] py-4 rounded-[9px] hover:bg-[#be4725] hover:text-white hover:border-[#be4725] transition-all duration-200 font-semibold">
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
