import Image from "next/image";
import { Twitter, Instagram, Mail } from "lucide-react";
import DarrellImage2 from "../assets/darrellpfp.jpg";
import IsaiahImage from "../assets/isaiah_img.jpg";
import RamonImage from "../assets/ramon_img.jpg";
import SectionHeader from "./ui/SectionHeader";

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

const iconLink = "text-white/60 transition-colors hover:text-brand-tint";

const Hosts = () => (
  <section id="hosts" className="on-dark w-full bg-navy py-24">
    <div className="mx-auto max-w-7xl px-4">
      <SectionHeader
        eyebrow="The Voices"
        title="Meet the"
        accent="Hosts"
        description={
          <>
            The voices you hear. The passion you feel. <br />
            This is GAME TIME.
          </>
        }
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hosts.map((host) => (
          <article
            key={host.name}
            className="flex flex-col border-t-2 border-brand bg-ink/60 p-8"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-white/15">
              <Image
                src={host.image}
                alt={host.name}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <h3 className="font-display mt-6 text-3xl font-bold uppercase">
              {host.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-brand-tint">{host.role}</p>
            <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
              {host.bio}
            </p>
            <div className="mt-6 flex gap-5 border-t border-white/10 pt-5">
              <a
                href={host.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${host.name} on X`}
                className={iconLink}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={host.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${host.name} on Instagram`}
                className={iconLink}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${host.socials.email}`}
                aria-label={`Email ${host.name}`}
                className={iconLink}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Hosts;
