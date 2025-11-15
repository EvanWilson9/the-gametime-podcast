import HeroButton from "./ui/HeroButton";
import heroBg from "../assets/hero-background.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center w-full justify-center overflow-hidden text-white">
        <div className="max-w-7xl">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg.src || '/assets/hero-background.webp'}
          alt="Sports background"
          className="w-full h-full object-fit absolute inset-0"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-[#0c121d]/90" />
      </div>

      <div className="w-full px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className="text-white">
              Game Time
            </span>
            <br />
            <span className="text-[#be4725]">Network</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Just some folks from the eastside talking sports. No hot takes, no drama—
            just real conversations about the games we love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="https://www.youtube.com/@Game_Time_Podcast" target="_blank">
              <HeroButton />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Convos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-4xl font-bold text-primary">Local</div>
              <div className="text-sm text-muted-foreground">Perspective</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-4xl font-bold text-primary">Weekly</div>
              <div className="text-sm text-muted-foreground">New Eps</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Hero;