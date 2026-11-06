import About from "@/components/About";
import Community from "@/components/Community";
import EventShowcase from "@/components/EventShowcase";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hosts from "@/components/Hosts";
import Live from "@/components/Live";
import Merch from "@/components/Merch";
import { Navbar } from "@/components/Navbar";
import Socials from "@/components/Socials";
import Sponsors from "@/components/Sponsors";
import { galleryImages } from "@/data/galleryImages";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Hosts />
      <Live />
      <EventShowcase title="Game Time Network @ Bigsys" images={galleryImages} />
      <Community />
      <Sponsors />
      <Merch />
      <Socials />
      <Footer />
    </div>
  );
}
