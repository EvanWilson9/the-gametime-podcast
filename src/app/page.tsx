'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Merch } from "@/components/Merch";
import { Navbar } from "@/components/Navbar";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Merch />
      <Socials />
      <Footer />
    </div>
  );
}
