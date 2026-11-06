import SectionHeader from "./ui/SectionHeader";
import { socialLinks as platforms } from "@/data/socialLinks";

const Socials = () => {
  return (
    <section id="socials" className="on-dark w-full bg-navy py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionHeader
          eyebrow="Stay Connected"
          title="Join The"
          accent="Game Time"
          description="Subscribe to the Game Time Network on YouTube and follow us on all socials to never miss an episode. Turn on post notifications because it's always Game Time."
        />

        <a
          href="https://www.youtube.com/@Game_Time_Network"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-brand px-8 py-4 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Subscribe on YouTube
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-medium text-white transition-colors hover:border-brand hover:bg-brand"
            >
              <platform.icon className="h-5 w-5" />
              {platform.name}
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/60">
          Turn on notifications so you know when we go live. It&#39;s that simple.
        </p>
      </div>
    </section>
  );
};

export default Socials;
