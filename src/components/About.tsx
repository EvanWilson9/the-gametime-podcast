import { Mic2, Users, Trophy, Twitter, Instagram, Mail } from "lucide-react";
import HostImage from "../assets/template-person.jpg";
import Image from "next/image";

const About = () => {
  const hosts = [
    {
      name: "Host Name",
      image: HostImage,
      role: "Co-Host",
      bio: "Born and raised on the eastside of Indianapolis. Proud Warren Central grad '15. From Friday night lights to the professional stage, bringing that genuine Warrior spirit to every sports take.",
      socials: {
        twitter: "https://twitter.com/hostname",
        instagram: "https://instagram.com/hostname",
        email: "host@gametime.com"
      }
    },
    {
      name: "Host Name 2",
      image: HostImage,
      role: "Co-Host",
      bio: "Eastside Indianapolis native and Warren Central alum '16. Bringing that authentic Indianapolis perspective from the halls of Warren to the airwaves.",
      socials: {
        twitter: "https://twitter.com/hostname2",
        instagram: "https://instagram.com/hostname2",
        email: "host2@gametime.com"
      }
    },
    {
      name: "Host Name 3",
      image: HostImage,
      role: "Co-Host",
      bio: "Warren Central '15 graduate and lifelong eastsider. From pickup games at the local courts to breaking down the biggest matchups, keeping it real with that eastside energy.",
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
      description: "Honest sports conversations from folks who actually care. No scripts, no filter—just us."
    },
    {
      icon: Users,
      title: "Eastside Roots",
      description: "Born and raised on the eastside. Local perspective on sports, from Indy to the world."
    },
    {
      icon: Trophy,
      title: "All the Sports",
      description: "From Pacers to Colts, college ball to the pros—we talk about what matters to us."
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
        What We're <span className="text-[#be4725]">About</span>
      </h2>
  <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
                We're just a crew from Indianapolis who love talking sports. 
                No fancy studios or corporate sponsors—just good conversation, 
                cold drinks, and real opinions on the games that matter to us.
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
                The voices behind the mic, bringing you authentic Indy sports talk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {hosts.map((host, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                      <Image 
                        src={HostImage}
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
