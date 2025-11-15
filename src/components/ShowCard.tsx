import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ShowCardProps {
  logo: StaticImageData;
  title: string;
  description: string;
  align?: 'left' | 'right';
  reverse?: boolean;
}

const ShowCard = ({ logo, title, description, align = 'left', reverse = false }: ShowCardProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-center gap-8 w-full`}>
      {/* Logo Section */}
      <div className={`flex flex-col items-center lg:items-center lg:flex-row gap-6 lg:gap-8 w-full lg:w-auto`}>
        <div className="shrink-0">
          <Image
            src={logo}
            width={220}
            height={220}
            className="rounded-lg w-64 h-64 lg:w-72 lg:h-72 object-cover"
            alt="Show logo"
          />
        </div>

        {/* Desktop: Title and Description next to image */}
        <div className={`hidden lg:flex flex-col gap-4 flex-1 justify-center`}>
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile: Title and Description below image */}
      <div className="flex lg:hidden flex-col items-center gap-4 w-full">
        <h3 className="text-2xl md:text-3xl font-bold text-center">{title}</h3>
        <p className="text-lg leading-relaxed text-muted-foreground text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;