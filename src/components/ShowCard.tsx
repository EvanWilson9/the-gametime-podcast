import React from "react";
import Image, { StaticImageData } from "next/image";

interface ShowCardProps {
  logo: StaticImageData;
  title: string;
  description: string;
  subHeader?: string; // <-- new optional prop
  reverse?: boolean;
  style?: boolean;
}

const ShowCard = ({
  logo,
  title,
  description,
  subHeader,
  reverse = false,
  style
}: ShowCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row" : "lg:flex-row-reverse"
      } lg:items-center gap-8 w-full`}
    >
      {/* Logo + desktop text */}
      <div className="flex flex-col items-center lg:flex-row gap-6 lg:gap-8 w-full lg:w-auto">
        <div className="shrink-0 overflow-hidden rounded-lg">
          <Image
            src={logo}
            width={220}
            height={220}
            alt="Show logo"
            className={`w-64 h-64 lg:w-72 lg:h-72 object-fit ${style && 'object-right'} transition-all`}
          />
        </div>

        {/* Desktop Text */}
        <div className="hidden lg:flex flex-col gap-2 flex-1 justify-center">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>

          {subHeader && (
            <p className="text-base italic text-muted-foreground opacity-90">
              {subHeader}
            </p>
          )}

          <p className="text-lg leading-relaxed text-muted-foreground mt-1">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile Text */}
      <div className="flex lg:hidden flex-col items-center gap-2 w-full text-center">
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>

        {subHeader && (
          <p className="text-base italic text-muted-foreground opacity-90">
            {subHeader}
          </p>
        )}

        <p className="text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
