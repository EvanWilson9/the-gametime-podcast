import { Mic } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 w-full bg-[#0c121d] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mic className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-lg">Game Time</div>
              <div className="text-sm text-muted-foreground">Eastside Sports Pod</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Game Time Network. All rights reserved.</p>
          </div>

          {/* Links */}
          {/* <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
