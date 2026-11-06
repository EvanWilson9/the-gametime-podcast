import { Mic2, Users, Trophy } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const pillars = [
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
      "From Indy’s Pacers and Colts to the college game and beyond, we bring you the stories that matter most!",
  },
];

const About = () => (
  <section id="about" className="w-full bg-white py-24">
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Who We Are"
        title="What We're"
        accent="About"
        description="The Game Time Network is where you can find authentic sports talk from NBA to NFL to college football and basketball. The Game Time Network has a little bit of something for everyone with our two live shows Game Time Live and Bias With A Little Truth and our hybrid shows Cots Corner and Zays Ways."
      />

      <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="bg-white p-8 transition-colors hover:bg-paper">
            <p.icon className="h-8 w-8 text-brand" strokeWidth={1.75} />
            <h3 className="font-display mt-5 text-2xl font-bold uppercase">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
