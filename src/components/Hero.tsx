import HeroButton from "./ui/HeroButton";
import newHeroBackground from "../assets/newHeroBackground.png";

const stats = [
  { value: "100+", label: "Convos" },
  { value: "Local", label: "Perspective" },
  { value: "Weekly", label: "New Eps" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="on-dark relative flex min-h-[640px] md:min-h-[780px] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={newHeroBackground.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/90" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-12 pt-20 text-center animate-fadeIn md:pb-12">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-tint">
          Eastside Sports Network
        </p>
        <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.9] md:text-8xl lg:text-9xl">
          Game Time <span className="text-brand">Network</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Just some guys from the eastside talking sports. No hot takes, no
          drama—just real conversations about the games we love.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="https://www.youtube.com/@Game_Time_Network" target="_blank" rel="noopener noreferrer">
            <HeroButton />
          </a>
          <a
            href="#live"
            className="rounded-md border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            See the Shows
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="px-2">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold uppercase text-white md:text-5xl">
                {s.value}
              </dd>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
