'use client';
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NewLogo from "../assets/newlogo.png";

interface NavbarProps {
  isGallery?: boolean;
}

const YOUTUBE = "https://www.youtube.com/@Game_Time_Network";

const homeLinks = [
  { label: "About", href: "/#about" },
  { label: "Hosts", href: "/#hosts" },
  { label: "Shows", href: "/#live" },
  { label: "Community", href: "/#community" },
  { label: "Merch", href: "/#merch" },
];

export function Navbar({ isGallery }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollActive(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = isGallery
    ? [{ label: "Home", href: "/" }]
    : homeLinks;

  const linkClass =
    "text-[15px] font-medium text-white/85 hover:text-white transition-colors";

  const solid = scrollActive || isOpen || isGallery;

  return (
    <header
      className={`fixed top-0 z-30 w-full transition-all duration-300 ${
        solid ? "bg-ink/95 shadow-lg shadow-black/20 py-2" : "py-4"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image src={NewLogo} width={42} height={42} alt="" className="rounded-md" />
          <span className="font-display text-2xl font-bold uppercase tracking-wide text-white">
            Game Time Network
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {links.map((item) => (
              <li key={item.label}>
                <Link href={item.href as Route} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            {!isGallery && (
              <li>
                <Link href="/gallery" className={linkClass}>
                  Gallery
                </Link>
              </li>
            )}
          </ul>
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brand px-5 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Subscribe
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t-2 border-brand px-6 pb-6 pt-4">
          <ul className="flex flex-col">
            {[...links, ...(isGallery ? [] : [{ label: "Gallery", href: "/gallery" }])].map(
              (item) => (
                <li key={item.label} className="border-b border-white/10">
                  <Link
                    href={item.href as Route}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-medium text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-md bg-brand py-3 text-center font-semibold text-white hover:bg-brand-dark"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </header>
  );
}
