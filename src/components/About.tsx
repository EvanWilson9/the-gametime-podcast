import { Mic2, Users, Trophy, Twitter, Instagram, Mail } from "lucide-react";
import DarrellImage from "../assets/darrell_img.jpg";
import IsaiahImage from "../assets/isaiah_img.jpg";
import RamonImage from "../assets/ramon_img.jpg";

import Image from "next/image";

const About = () => {
  const hosts = [
    {
      name: "Darrell Cothern",
      image: DarrellImage,
      role: "Co-Host",
      bio: "Darrell Cothern, Warren Central grad, US Army veteran and lifelong Eastsider. From pickup games at the local courts to coaching AAU, breaking down the biggest matchups, Huge NFL, fan longtime Pacers fan, love the Indiana Hoosiers and Alabama Cimson Tide. Always keeping it real with that Eastside energy.",
      socials: {
        twitter: "https://twitter.com/hostname",
        instagram: "https://instagram.com/hostname",
        email: "host@gametime.com"
      }
    },
    {
      name: "Isaiah Hoffman",
      image: IsaiahImage,
      role: "Co-Host",
      bio: "Isaiah Hoffman is a Warren Central Grad and sports broadcaster at Indiana University East, currently in his senior year, and the co-host of The Game Time Podcast. His strongest focus is covering the NBA, where he hosts Game Time: After Hours a late-night segment breaking down the biggest games, performances, and storylines around the league.",
      socials: {
        twitter: "https://twitter.com/hostname2",
        instagram: "https://instagram.com/hostname2",
        email: "host2@gametime.com"
      }
    },
    {
      name: "Ramon Stallings",
      image: RamonImage,
      role: "Co-Host",
      bio: "Ramon Stallings hails from the People's Republic of Gary.  He is a former athlete, parent of a former athlete, grandparent of a current athlete, Coach, athletic administrator, mentor and all around good dude.  Only thing he loves more than sports is THE OHIO STATE BUCKEYES...O-H.",
      socials: {
        twitter: "https://twitter.com/hostname3",
        instagram: "https://instagram.com/hostname3",
        email: "host3@gametime.com"
      }
    },
  ];

  const cards = [
    {
      icon: Mic2,
      title: "Real Talk",
      description: "We keep it real, no scripts, no filters, no fake takes. Just genuine conversations from people who care about sports as much as you do."
    },
    {
      icon: Users,
      title: "City Roots",
      description: "From Indianapolis to the East Side and beyond we cover it all!"
    },
    {
      icon: Trophy,
      title: "All the Sports",
      description: " From Indy’s Pacers and Colts to the college game and beyond we bring you the stories that matter most!"
    }
  ];

  return (
    <>
        <section id="about" className="w-full py-24 relative overflow-hidden scroll-smooth">
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
              Game Time Network is where sports talk meets real conversation. 
              We cover it all from the NBA to college hoops, NFL to college sports from NCAA to NAIA through live shows, 
              interviews, and creative digital content. What started as a single podcast has grown into a full network 
              with shows like Game Time Live, Game Time After Hours, and Cot&#39;s Corner.
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cards.map((card, index) => (
                <div key={index} className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group">
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
        <section className="flex justify-center w-full py-24 px-4 relative overflow-hidden bg-[#0d1723]">
        <div className="max-w-7xl">
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 text-white">
              <h2 className="text-4xl md:text-5xl font-bold">
                Meet the <span className="text-[#be4725]">Hosts</span>
              </h2>
              <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The voices you hear. The passion you feel. This is Game Time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {hosts.map((host, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                    <p className="text-muted-foreground text-center mb-6">{host.bio}</p>
                    
                    <div className="flex space-x-4">
                      <a href={host.socials.twitter} target="_blank" rel="noopener noreferrer" 
                         className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href={host.socials.instagram} target="_blank" rel="noopener noreferrer"
                         className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${host.socials.email}`}
                         className="text-muted-foreground hover:text-primary transition-colors">
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
