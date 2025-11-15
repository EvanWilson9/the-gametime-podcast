import { Youtube, Twitter, Instagram, Facebook } from "lucide-react";

const Socials = () => {
  const platforms = [
    { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@Game_Time_Podcast" },
    { name: "Twitter", icon: Twitter, url: "" },
    { name: "Instagram", icon: Instagram, url: "" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/groups/1387689575793596" }
  ];

  return (
    <section id="socials" className="w-full py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0c121d] via-white to-white"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0d1723]/20 rounded-full blur-[120px]"></div>


      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Join The<span className="text-[#be4725]"> Game Time</span>
          </h2>
          <div className="mx-auto w-16 h-1 bg-linear-to-r from-[#be4725] via-[#a73b24] to-[#0d1723] rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Subscribe to the Game Time Network on YouTube and follow us on all socials to never miss an episode. 
            Turn on post notifications because it&#39;s always Game Time.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[9px] bg-[#0d1723] text-white font-semibold shadow-md hover:bg-[#be4725] hover:text-white hover:border-[#be4725] transition-all duration-200"
                >
                  <platform.icon className="w-6 h-6" />
                  {platform.name}
                </a>
              ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto pt-8 ">
            <div className="bg-white shadow-2xl rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold">Don&#39;t Miss Out</h3>
              <p className="text-sm text-muted-foreground">
                Turn on notifications so you know when we go live. It&#39;s that simple.
              </p>
              <a href="https://www.youtube.com/@Game_Time_Podcast" target="_blank">
                <button className="cursor-pointer bg-[#be4725] text-white px-4 py-2 rounded-md hover:bg-[#a73b24] hover: transition">Subscribe on YouTube</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
