'use client'
import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Live from "@/components/Live";
import Merch from "@/components/Merch";
import { Navbar } from "@/components/Navbar";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Live />
      {/* <ComingSoon 
        title="Merch" 
        description="Our merchandise store is currently under construction. We're working on bringing you premium GameTime gear that represents the eastside passion and energy. Stay tuned for exclusive designs, high-quality apparel, and limited edition drops."
        subtitle="Coming Soon!"
        sectionId="merch"
      /> */}
      <Merch />
      <Socials />
      <Footer />
    </div>
  );
}
