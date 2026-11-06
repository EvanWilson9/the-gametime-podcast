"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EventShowcaseProps {
  title?: string;
  description?: string;
  images: string[];
}

const EventShowcase: React.FC<EventShowcaseProps> = ({
  title,
  description,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section id="events" className="w-full bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Live Events"
          title={title ?? ""}
          description={description}
        />

        {/* Slideshow Container */}
        <div className="relative w-full rounded-lg overflow-hidden group">
          {/* Main Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-black">
            <Image
              src={images[currentImageIndex]}
              alt={`Event photo ${currentImageIndex + 1}`}
              fill
              className="object-contain transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 rounded-r"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 rounded-l"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 z-10 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Play/Pause indicator */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="absolute bottom-4 left-4 z-10 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
          >
            {isAutoPlay ? "Pause" : "Play"}
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`shrink-0 relative w-20 h-20 rounded-lg overflow-hidden bg-black transition-all ${
                currentImageIndex === index
                  ? "ring-2 ring-brand"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventShowcase;
