import Image from "next/image";
import NewLogo from "../assets/newlogo.png";

const links = [
  { label: "About", href: "/#about" },
  { label: "Hosts", href: "/#hosts" },
  { label: "Shows", href: "/#live" },
  { label: "Merch", href: "/#merch" },
  { label: "Gallery", href: "/gallery" },
];

const Footer = () => {
  return (
    <footer className="on-dark w-full border-t border-white/10 bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src={NewLogo} width={40} height={40} alt="" className="rounded-md" />
          <div>
            <div className="font-display text-xl font-bold uppercase">Game Time Network</div>
            <div className="text-sm text-muted-foreground">Eastside Sports Network</div>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-white/70 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-center text-sm text-muted-foreground md:text-right">
          <p>© 2026 Game Time Network. All rights reserved.</p>
          <a href="https://evanwilson.netlify.app/" className="mt-1 inline-block hover:text-white">
            Developed by Evan Wilson ·{" "}
            <span className="font-semibold text-brand-tint">Portfolio Website</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
