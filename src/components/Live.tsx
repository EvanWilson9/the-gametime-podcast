import React from "react";
import { Calendar, Clock, Cross, Youtube } from "lucide-react";
import LiveLogo from "../assets/live-logo.png";
import GameTimeLiveBackground from "../assets/GameTimeLiveBackground.png";
import GameTimeLiveLogoNew from "../assets/GameTimeLiveNew.png";
// import AfterHours from '../assets/after-hours.png';
// import AfterHoursResized from '../assets/after-hours-resized.png';
import ZaysWays from "../assets/zaysways.png";
import ZaysWaysNew from "../assets/ZaysWayNew.png";

import CotsCorner from "../assets/cots_corner.png";
import CotsCorner2 from "../assets/cotscorner2.png";
import CotsCornerNew from "../assets/CotsCornerNew.jpg";

import BiasWithLittleTruth from "../assets/biasWithALittleTruthIMG.png";
// import FollowingThePack from '../assets/following-the-pack.png';
// import CrossTime from '../assets/cross-time.jpg';
// import CrossTime from '../assets/cross-time-basketball.jpg';
import CrossTimeNew from '../assets/CrossTimeNew.png';

import SideBySide from "../assets/side-by-side.png";

import GraceCollege from "../assets/gracecollege.jpg";

import Image from "next/image";
import ShowCard from "./ShowCard";
import GameTimeCountdown from "./GameTimeCountdown";

const Live = () => {
  return (
    <section
      id="live"
      className="relative isolate w-full py-24 overflow-hidden bg-[#0d1723] text-white"
    >
      <div className="absolute inset-x-0 top-0 h-[760px] z-0">
        <Image
          src={GameTimeLiveBackground}
          alt="Game Time Live background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0d1723]/80" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0d1723] via-[#0d1723]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          {/* <div className='mb-30'><GameTimeCountdown /> </div> */}
          <div className="flex flex-row align-middle items-center justify-center gap-5">
            <div className="">
              <Image
                src={GameTimeLiveLogoNew}
                width={50}
                height={50}
                className="rounded-lg"
                alt="GameTime Live logo"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
              Game Time <span className="text-[#be4725]">Live</span>
            </h2>
          </div>
          <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Presented by The Game Time Network
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Show Info */}
          <div className="space-y-8 rounded-3xl border border-white/10 bg-black/35 p-6 md:p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
            <p className="text-lg leading-relaxed text-white/90">
              Game Time Live is the Flagship show of the Game Time Network and
              is live now every Saturday from 12-1PM and is hosted by Isaiah
              Hoffman,Darrell Sr and Ramon Stallings Sr as they cover everything
              in the sports world.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 text-white">Featured Guests</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Mark Boyle (Voice of the Indiana Pacers)</li>
                <li>Matt Taylor (Voice of the Indianapolis Colts)</li>
                <li>Kory Alford (Assistant Coach, Oral Roberts)</li>
                <li>Scott Moore (Head Coach, Grace College)</li>
                <li>Mark Hester (Head Coach, IU East)</li>
                <li>Mark Montieth (Indiana Sports Historian & Author)</li>
                <li>
                  Deandre Brock (Head Coach, Warren Central Men's Basketball)
                </li>
              </ul>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Game Time Sponsors</h3>
            <div className="text-white/80 italic">
              Presented by Mack Gadis, your trusted{" "}
              <a
                href="https://www.statefarm.com/"
                className="underline text-[#f4b39d]"
                target="_blank"
              >
                State Farm
              </a>{" "}
              Agent. <br />
              (317-894-3865)
            </div>
            <div className="text-white/80 italic">
              Jason Hancock with{" "}
              <a
                href="https://wiredtothenines.com/"
                className="underline text-[#f4b39d]"
                target="_blank"
              >
                Wired to the Nines
              </a>
              <br />
              (wiredtothenines@yahoo.com)
            </div>
            <div className="text-white/80 italic">
              Bigsy's Sports Grill -
              <a
                href="https://www.google.com/maps/dir//7802+Brookville+Rd,+Indianapolis,+IN+46239/@40.2128896,-85.4065152,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x886b4f5faa3b60fb:0xfbb50e63d1a32bf6!2m2!1d-86.030092!2d39.751396?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D"
                className="underline text-[#f4b39d]"
                target="_blank"
              >
                7802 Brookville Road, Indinapolis, Indiana
              </a>
              <br />
              (463-202-2970)
            </div>

            <div className="text-white/80 italic">
              {" "}
              Hamilton Mechanical Services <br />
              (317 612-1979)
            </div>
          </div>

          {/* Right Column - Watch Info */}
          <div className="flex flex-col rounded-3xl border border-white/10 bg-[#0c121d]/75 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-sm min-h-[420px]">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-bold text-white">Watch Live on Saturdays</h3>
              <p className="text-lg leading-relaxed text-white/80">
                From bold debates to exclusive interviews, Game Time Live brings
                the passion and perspective of real sports fans straight to your
                screen.
              </p>
            </div>

            <div className="mt-8 space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#be4725] shrink-0" />
                <span>Saturdays</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#be4725] shrink-0" />
                <span>12:00 - 1:00 PM EST</span>
              </div>
              <div className="flex items-center gap-3">
                <Youtube className="w-6 h-6 text-[#be4725] shrink-0" />
                <span>Live on YouTube / Facebook / Twitter</span>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@Game_Time_Network"
              target="_blank"
              className="mt-auto pt-8"
            >
              <button className="cursor-pointer w-full bg-[#be4725] hover:bg-[#a73b24] text-white rounded-lg py-3 px-6 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#be4725]/30">
                <Youtube className="w-5 h-5" />
                Watch Now
              </button>
            </a>
          </div>
        </div>

        {/* Our Other Shows Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 mt-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            The Game Time<span className="text-[#be4725]"> Lineup</span>
          </h2>
          <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto mt-20">
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

          {/*<div className='flex flex-col gap-3 w-full items-center'>
            <Image 
            src={BigsysSportsGrillFlyer}
            width={260}
            height={260}
            alt="Bigsys Sports Grill Flyer"
            />
          </div>*/}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#be4725]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Live;
