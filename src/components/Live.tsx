import React from "react";
import Image from "next/image";
import { Calendar, Clock, Youtube } from "lucide-react";
import GameTimeLiveBackground from "../assets/GameTimeLiveBackground.png";
import GameTimeLiveLogoNew from "../assets/GameTimeLiveNew.png";
import ZaysWaysNew from "../assets/ZaysWayNew.png";
import CotsCornerNew from "../assets/CotsCornerNew.jpg";
import BiasWithLittleTruth from "../assets/biasWithALittleTruthIMG.png";
import CrossTimeNew from "../assets/CrossTimeNew.png";
import SideBySide from "../assets/side-by-side.png";
import ShowCard from "./ShowCard";
import SectionHeader from "./ui/SectionHeader";

const guests = [
  "Mark Boyle (Voice of the Indiana Pacers)",
  "Matt Taylor (Voice of the Indianapolis Colts)",
  "Kory Alford (Assistant Coach, Oral Roberts)",
  "Scott Moore (Head Coach, Grace College)",
  "Mark Hester (Head Coach, IU East)",
  "Mark Montieth (Indiana Sports Historian & Author)",
  "Deandre Brock (Head Coach, Warren Central Men's Basketball)",
];

const Live = () => {
  return (
    <section id="live" className="on-dark relative isolate w-full overflow-hidden bg-navy py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px]">
        <Image
          src={GameTimeLiveBackground}
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-navy to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="The Shows"
          title="Game Time"
          accent="Live"
          description="Presented by The Game Time Network"
        />

        {/* Flagship show */}
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <div className="flex items-center gap-5">
              <Image
                src={GameTimeLiveLogoNew}
                width={72}
                height={72}
                className="rounded-lg"
                alt="GameTime Live logo"
              />
              <p className="text-lg leading-relaxed text-white/90">
                Game Time Live is the Flagship show of the Game Time Network and
                is live now every Tuesday from 6PM-7PM and is hosted by
                Isaiah Hoffman, Darrell Sr and Ramon Stallings Sr as they cover
                everything in the sports world.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold uppercase">Featured Guests</h3>
              <ul className="mt-4 grid gap-x-8 gap-y-2 text-white/80 sm:grid-cols-2">
                {guests.map((g) => (
                  <li key={g} className="border-l-2 border-brand pl-3 text-sm leading-snug">
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex flex-col border border-white/10 bg-ink/80 p-8 lg:col-span-2">
            <h3 className="font-display text-3xl font-bold uppercase">Watch Live on Tuesdays</h3>
            <p className="mt-4 leading-relaxed text-white/80">
              From bold debates to exclusive interviews, Game Time Live brings
              the passion and perspective of real sports fans straight to your
              screen.
            </p>
            <ul className="mt-6 space-y-4 text-white/85">
              <li className="flex items-center gap-3">
                <Calendar className="h-5 w-5 shrink-0 text-brand" />
                Tuesdays
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-brand" />
                6:00PM - 7:00PM EST
              </li>
              <li className="flex items-center gap-3">
                <Youtube className="h-5 w-5 shrink-0 text-brand" />
                Live on YouTube / Facebook / Twitter
              </li>
            </ul>
            <a
              href="https://www.youtube.com/@Game_Time_Network"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Youtube className="h-5 w-5" />
              Watch Now
            </a>
          </aside>
        </div>

        {/* Lineup */}
        <div className="mt-24 border-t border-white/10 pt-20">
          <SectionHeader eyebrow="More to Watch" title="The Game Time" accent="Lineup" />

          <div className="divide-y divide-white/10">
            <ShowCard
              logo={BiasWithLittleTruth}
              title="Bias With a Little Truth"
              description="Bias With a Little Truth is our second live weekly show for the Game Time Network and if you like a little comedy and a lot of bias with your sports talk than this is the show for you hosted by Reggie Sykes and Darrell aka Dcot Bias With a Little Truth brings a comedic energy to the Game Time Network, but still the same love for sports that we all have."
            />
            <ShowCard
              logo={CotsCornerNew}
              title="Cot's Corner"
              description='Darrell Sr., better known as DCot brings his unfiltered energy and passion to Cot"s Corner, where no topic is off limits. From the NFL and NBA to college football and everything in between, DCot breaks down the biggest stories in sports the way fans actually talk about them — real opinions, bold takes, and nonstop personality.'
              subHeader="Facts Over Feelings"
            />
            <ShowCard
              logo={ZaysWaysNew}
              title="Zays Ways"
              description="Zays Ways is hosted by Isaiah Hoffman, where if he has something on his mind your gonna hear about it, whether it’s the middle of the day or late at night. You never know when a Zays Ways episode might drop, but always remember it’s Zays Way or the highway."
              style={true}
            />
            <ShowCard
              logo={CrossTimeNew}
              title="Cross Time College Football"
              description="The Cross Time college football show is a joint show posted by the Game Time Network in Crossroad Sports during the college football season. The show alternates each week, with one episode being on the Crossroad Sports Channel and then the next episode being on the Game Time Network channel. If you like college football, this is the show for you."
            />
            <ShowCard
              logo={SideBySide}
              title="Side By Side"
              description="Side By Side is a weekly recorded crossover show featuring Isaiah Hoffman of the Game Time Network and Brandon Reef of Crossroad Sports. Each week, Isaiah and Brandon break down everything happening across motorsports, with a focus on the “Big 3” NASCAR, IndyCar, and Formula 1. From race recaps and standout performances to major storylines and championship implications, Side By Side delivers in-depth discussion and analysis for passionate racing fans. If you love motorsports, this is the show for you."
              subHeader="Airs February to November"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;
