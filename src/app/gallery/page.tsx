import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { galleryImages } from "@/data/galleryImages";

export default function GalleryPage() {
  return (
    <>
      <Navbar isGallery={true} />
      <section className="on-dark w-full min-h-screen bg-navy pt-32 pb-20">
        <div className="text-center px-4 mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Moments
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
            Gallery
          </h1>
          <div className="mx-auto mt-5 w-14 h-1 rounded-full bg-brand"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Photos from Game Time Network events, live shows, and community
            moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1">
          {galleryImages.map((image, index) => (
            <div key={image} className="relative aspect-square overflow-hidden">
              <Image
                src={image}
                alt={`Game Time Network event photo ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
