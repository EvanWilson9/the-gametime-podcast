import React from "react";
import Image, { StaticImageData } from "next/image";

interface ShowCardProps {
  logo: StaticImageData;
  title: string;
  description: string;
  subHeader?: string;
  reverse?: boolean;
  style?: boolean;
}

const ShowCard = ({
  logo,
  title,
  description,
  subHeader,
  reverse = false,
  style,
}: ShowCardProps) => {
  return (
    <article
      className={`flex flex-col items-center gap-8 py-12 first:pt-0 last:pb-0 lg:items-center lg:gap-12 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="shrink-0 overflow-hidden rounded-lg">
        <Image
          src={logo}
          width={288}
          height={288}
          alt={`${title} logo`}
          className={`h-56 w-56 object-cover sm:h-64 sm:w-64 lg:h-72 lg:w-72 ${
            style ? "object-right" : ""
          }`}
        />
      </div>

      <div className="flex-1 text-center lg:text-left">
        <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">{title}</h3>
        {subHeader && (
          <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-brand-tint">
            {subHeader}
          </p>
        )}
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
};

export default ShowCard;
