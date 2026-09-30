import { Mic2, Users, Trophy, Twitter, Instagram, Mail } from "lucide-react";
import DarrellImage from "../assets/darrell_img.jpg";
import DarrellImage2 from "../assets/darrellpfp.jpg";
import IsaiahImage from "../assets/isaiah_img.jpg";
import RamonImage from "../assets/ramon_img.jpg";
import AFSPBanner from "../assets/afsp_banner.png";

import Image from "next/image";
import EventShowcase from "./EventShowcase";

import LiveEvent from "../assets/live_event.png";

const About = () => {
  const eventImages = [
    "/images/20260404_194201[1].JPG",
    "/images/20260404_194351[1].JPG",
    "/images/20260404_194743[1].JPG",
    "/images/20260404_201010[1].JPG",
    "/images/20260404_201545[1].JPG",
    "/images/IMG_0202[1].JPG",
    "/images/IMG_0204[1].JPG",
    "/images/IMG_7041.jpeg[1].jpg",
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/25807.jpg",
    "/images/25808.jpg",
    "/images/25809.jpg",
  ];

  //   const eventDescription = `The Game Time Network, in partnership with Bigsys, is excited to bring you exclusive in-house live events every couple of months! 🎉

  // At our first event on April 4th, we gave away Game Time t-shirts, gift cards, and our headline prizes — 3 pairs of Pacers tickets

  // Missed out? Don't worry our next event is coming up in late June (exact date TBD), and you'll have another chance to win big and be part of the experience.

  // We can't wait to see you there!`;

  const hosts = [
    {
      name: "Darrell Cothern Sr.",
      image: DarrellImage2,
      role: "Co-Creator and Head of Business Relations",
      bio: "Darrell Cothern Sr., a Warren Central grad, U.S. Army veteran, and lifelong Eastsider. From pickup games at local courts to coaching AAU, he enjoys breaking down the biggest matchups. He's a huge NFL fan, a longtime Pacers fan, and loves the Indiana Hoosiers, along with the Alabama Crimson Tide. Always keeping it real with that Eastside energy.",
      socials: {
        twitter: "https://x.com/DcotCothern?t=AE98nJbh8J4Nt5RoBfrEZg&s=01",
        instagram:
          "https://www.instagram.com/dcotgametimepod?utm_source=qr&igsh=MTVxZTBvZGZ5bTV4eQ%3D%3D",
        email: "dardeidar@yahoo.com",
      },
    },
    {
      name: "Isaiah Hoffman",
      image: IsaiahImage,
      role: "Co-Creator and Head of Content Management",
      bio: "Isaiah Hoffman is a Warren Central grad and aspiring sports broadcaster known for his time at Indiana University East and is the co-creator ahead of content for the Game Time Network you can catch Isaiah on game time live and his own show Zay’s Ways right here on the Game Time Network.",
      socials: {
        twitter: "https://x.com/isaiah_hoff96?s=21",
        instagram:
          "https://www.instagram.com/isaiah.hoff96?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        email: "isaiahhoffman13@gmail.com",
      },
    },
    {
      name: "Ramon Stallings Sr.",
      image: RamonImage,
      role: "Co-Creator and Content Contributor",
      bio: "Ramon Stallings Sr. hails from the People's Republic of Gary.  He is a former athlete, parent of a former athlete, grandparent of a current athlete, Coach, athletic administrator, mentor and all around good dude.  Only thing he loves more than sports is THE OHIO STATE BUCKEYES...O-H.",
      socials: {
        twitter: "https://x.com/Coach_Stallings",
        instagram: "https://www.instagram.com/i_am_coachstallings/",
        email: "host3@gametime.com",
      },
    },
  ];

  const cards = [
    {
      icon: Mic2,
      title: "Real Talk",
      description:
        "We keep it real, no scripts, no filters, no fake takes. Just genuine conversations from people who care about sports as much as you do.",
    },
    {
      icon: Users,
      title: "City Roots",
      description:
        "From Gary, to Indianapolis, and to the East Side and beyond, we cover it all!",
    },
    {
      icon: Trophy,
      title: "All the Sports",
      description:
        " From Indy’s Pacers and Colts to the college game and beyond, we bring you the stories that matter most!",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="w-full py-24 relative overflow-hidden scroll-smooth"
      >
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              What We&#39;re <span className="text-[#be4725]">About</span>
            </h2>
            <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Game Time Network is where you can find authentic sports
              taught from NBA to NFL to college football and basketball the Game
              Time Network has a little bit of something for everyone with our
              two live shows Game Time Live and Bias With A Little Truth and our
              hybrid shows Cots Corner and Zays Ways.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="bigsy" className="w-full pb-10">
        <EventShowcase
          title="Game Time Network @ Bigsys"
          images={eventImages}
        />
      </section>
      <section className="pb-15">
        {/* <Image
          src={LiveEvent}
          alt="Live Event Graphic"
          width={500}
          height={800}
          className=""
          priority
        /> */}
      </section>
      <section className="w-full bg-[#0d1723] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Banner */}
            <div className="relative w-full">
              <Image
                src={AFSPBanner}
                alt="AFSP Banner"
                width={1600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0d1723]">
                  American Foundation for Suicide Prevention (AFSP)
                </h2>

                <div className="w-20 h-1 rounded-full bg-[#be4725]"></div>

                <p className="text-lg leading-relaxed text-gray-700">
                  This organization aims to help spread awareness and support
                  mental health initiatives throughout our community.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  If you or someone you care about is struggling, support is
                  available 24/7. Call, text, or chat the 988 Suicide & Crisis
                  Lifeline by dialing 988. You can also connect with the Crisis
                  Text Line by texting HELLO to 741741. You are not alone — help
                  is just a conversation away.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4">
                <a
                  href="https://afsp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be4725] font-semibold hover:underline text-lg"
                >
                  Visit the AFSP Website
                </a>

                <a
                  href="https://supporting.afsp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be4725] font-semibold hover:underline text-lg"
                >
                  Learn More About Suicide Prevention
                </a>
              </div>

              {/* Donate CTA */}
              <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0d1723] mb-2">
                      Donate & Support the Cause
                    </h3>

                    <p className="text-gray-700 max-w-2xl">
                      Every contribution helps provide education, advocacy,
                      research, and support for individuals and families
                      affected by suicide.
                    </p>
                  </div>

                  <a
                    href="https://supporting.afsp.org/general-donations/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#be4725] hover:bg-[#a73b24] transition-colors text-white font-semibold px-8 py-4 rounded-xl"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full py-24 px-4 relative overflow-hidden bg-[#0d1723]">
        <div className="max-w-7xl">
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 text-white">
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet the <span className="text-[#be4725]">Hosts</span>
              </h2>
              <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The voices you hear. The passion you feel. <br />
                This is GAME TIME.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {hosts.map((host, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                      <Image
                        src={host.image}
                        alt="Host image"
                        fill={true}
                        className="object-cover"
                        sizes="(max-width: 768px) 192px, 192px"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{host.name}</h3>
                    <p className="text-primary font-medium mb-2">{host.role}</p>
                    <p className="text-muted-foreground text-center mb-6">
                      {host.bio}
                    </p>

                    <div className="flex space-x-4">
                      <a
                        href={host.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={host.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${host.socials.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
