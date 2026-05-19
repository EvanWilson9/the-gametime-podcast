import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

const galleryImages = [
  '/images/20260404_194201[1].JPG',
    '/images/20260404_194351[1].JPG',
    '/images/20260404_194743[1].JPG',
    '/images/20260404_201010[1].JPG',
    '/images/20260404_201545[1].JPG',
    '/images/IMG_0202[1].JPG',
    '/images/IMG_0204[1].JPG',
    '/images/IMG_7041.jpeg[1].jpg',
];

export default function GalleryPage() {
  return (
    <>
    <Navbar isGallery={true}/>
    <section className="w-full min-h-screen bg-[#0d1723] py-20">

      {/* Header */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Gallery
        </h1>

        <div className="mx-auto mt-4 w-20 h-1 rounded-full bg-[#be4725]"></div>

        <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
          Photos from Game Time Network events, podcasts,
          live shows, and community moments.
        </p>
      </div>

      {/* Infinite Style Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-[#0d1723]">

        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden"
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}

      </div>
    </section>
    </>
  );
}