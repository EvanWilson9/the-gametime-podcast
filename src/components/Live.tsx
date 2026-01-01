import React from 'react';
import { Calendar, Clock, Cross, Youtube } from 'lucide-react';
import LiveLogo from '../assets/live-logo.png';
import AfterHours from '../assets/after-hours.png';
import AfterHoursResized from '../assets/after-hours-resized.png';
import CotsCorner from '../assets/cots-corner.png';
import FollowingThePack from '../assets/following-the-pack.png';
import CrossTime from '../assets/cross-time.jpg';

import GraceCollege from '../assets/gracecollege.jpg';

import Image from 'next/image';
import ShowCard from './ShowCard';

const Live = () => {
  return (
    <section id="live" className="w-full py-24 relative overflow-hidden bg-[#0d1723] text-white">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className='flex flex-row align-middle items-center justify-center gap-5'>
            <div className=''>
                <Image 
                src={LiveLogo}
                width={50}
                height={50}
                className='rounded-lg'
                alt='GameTime Live logo'
                />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2">
                GameTime <span className="text-[#be4725]">Live</span>
            </h2>
          </div>
          <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Presented by The GameTime Network
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Show Info */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              GameTime Live is a weekly sports talk show hosted by Isaiah Hoffman, senior sports 
              broadcaster at Indiana University East, Darrell Cothern Sr., and Ramon Stallings Sr. every 
              Sunday from 12–1 PM (EST), Isaiah, Darrell Sr. and Ramon Sr. deliver energetic coverage of college 
              and pro sports, breaking down the biggest stories across the NFL, NBA, and college football.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Featured Guests</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mark Boyle (Voice of the Indiana Pacers)</li>
                <li>Matt Taylor (Voice of the Indianapolis Colts)</li>
                <li>Kory Alford (Assistant Coach, Oral Roberts)</li>
                <li>Scott Moore (Head Coach, Grace College)</li>
                <li>Mark Hester (Head Coach, IU East)</li>
                <li>Mark Montieth (Indiana Sports Historian & Author)</li>
              </ul>
            </div>
            <h3 className="text-2xl font-bold mb-4">Game Time Sponsors</h3>
            <div className="text-muted-foreground italic">
              Presented by Mack Gadis, your trusted <a href="https://www.statefarm.com/" className='underline' target='_blank'>State Farm</a> Agent. <br/>(317-894-3865)
            </div>
            <div className="text-muted-foreground italic">
              Jason Hancock with <a href="https://wiredtothenines.com/" className='underline' target='_blank'>Wired to the Nines</a><br/>(wiredtothenines@yahoo.com)
            </div>
          </div>

          {/* Right Column - Watch Info */}
          <div className="flex flex-col justify-between bg-black/20 rounded-2xl p-8 space-y-8">
            <div className='flex flex-col gap-5'>
            <h3 className="text-2xl font-bold">Watch Live on Sundays</h3>
            <p className="text-lg leading-relaxed">
              From bold debates to exclusive interviews, GameTime Live brings the passion and 
              perspective of real sports fans straight to your screen.
            </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-[#be4725]" />
                <span>Sundays</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#be4725]" />
                <span>12:00 - 1:00 PM EST</span>
              </div>
              <div className="flex items-center gap-3">
                <Youtube className="w-6 h-6 text-[#be4725]" />
                <span>Live on YouTube / Facebook / Twitter</span>
              </div>
            </div>
            <a href="https://www.youtube.com/@Game_Time_Podcast/streams" target='_blank'>
                <button 
                className="cursor-pointer w-full mt-4 bg-[#be4725] hover:bg-[#a73b24] text-white rounded-lg py-3 px-6 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                <Youtube className="w-5 h-5" />
                Watch Now
                </button>
            </a>
          </div>
        </div>

        {/* Our Other Shows Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 mt-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Other <span className="text-[#be4725]">Shows</span>
          </h2>
          <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto mt-20">
          <ShowCard
            logo={FollowingThePack}
            title="Following The Pack"
            description="Following the Pack is an exclusive weekly series that takes you inside IU East Men’s Basketball. Hosted by senior broadcaster Isaiah Hoffman, each episode features in-depth conversations with Head Coach Mark Hester as they break down games, preparation, and the grind of an NAIA basketball season. From road trips to rivalries, this series gives fans a true behind-the-scenes look at what it takes to compete at the college level."
          />

          <ShowCard
            logo={AfterHoursResized}
            title="GameTime: After Hours"
            description="GameTime: After Hours is the late-night home for passionate NBA talk. Hosted by Isaiah Hoffman, the show delivers quick, insightful recaps, bold takes, and next-day reactions to the biggest moments across the league. From game-winners to breakout performances, Isaiah breaks down the night's action with humor, energy, and his signature &quot;Zay's Wayz&quot; Tier List."
            style={true}
          />

          <ShowCard
            logo={CotsCorner}
            title="Cot's Corner"
            description="Darrell Sr., better known as DCot brings his unfiltered energy and passion to Cot’s Corner, where no topic is off limits. From the NFL and NBA to college football and everything in between, DCot breaks down the biggest stories in sports the way fans actually talk about them — real opinions, bold takes, and nonstop personality."
            subHeader='Facts Over Feelings'
          />

          <ShowCard
            logo={CrossTime}
            title="The Cross-Time College Football Show"
            description="The CrossTime College Football Show is a weekly live crossover series presented by The Game Time Network and CrossRoads Sports. Airing every Sunday at 7 PM, the show rotates between both channels and brings together two of Indiana’s fastest-growing sports platforms for one mission: delivering the most energetic, authentic, and insightful college football coverage anywhere online."
          />

          {/* <div className='flex flex-col gap-3 w-full items-center'>
            <Image 
            src={GraceCollege}
            width={260}
            height={260}
            alt="Grace College"
            />
            <a href="https://www.gofevo.com/event/Gracecollege2" target='_blank' className='underline'>Click here for more information</a>
          </div> */}

        </div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#be4725]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Live;