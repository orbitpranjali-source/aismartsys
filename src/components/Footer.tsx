import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import aiLogo from "@/assets/ai-logo.jpg";

const quickLinks = ["Home", "Services", "Products", "Portfolio", "FAQ", "Contact"];
const serviceLinks = [
  { name: "AI Development", ref: "ai-development" },
  { name: "Web Development", ref: "web-development" },
  { name: "Automation", ref: "automation-solutions" },
  { name: "Chatbot Development", ref: "ai-chatbot" },
  { name: "Data Analytics", ref: "data-analytics" },
  { name: "Mobile Apps", ref: "mobile-apps" }
];

const Footer = () => (
  <footer className="relative border-t border-border pt-20 pb-8 overflow-hidden bg-background">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />

    {/* Decorative blur orb */}
    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={aiLogo} alt="AI SmartSyS" className="h-12 w-12 object-contain rounded-md" />
            <span className="font-heading text-2xl font-bold text-foreground tracking-tight">AI SmartSyS</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Empowering businesses with intelligent AI solutions for a smarter, more connected future. We bridge the gap between human intelligence and machine efficiency.
          </p>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/20 transition-all duration-300 hover:scale-110">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-6 text-sm uppercase tracking-widest text-foreground">Explore</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-accent text-sm transition-all duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-6 text-sm uppercase tracking-widest text-foreground">Capabilities</h4>
          <ul className="space-y-4">
            {serviceLinks.map((link) => (
              <li key={link.ref}>
                <a href={`#${link.ref}`} className="text-muted-foreground text-sm hover:text-accent transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-heading font-semibold mb-6 text-sm uppercase tracking-widest text-foreground">Contact</h4>
          <div className="space-y-4">
            <a href="tel:+917024128029" className="flex items-center gap-3 text-muted-foreground hover:text-accent text-sm transition-colors">
              <span className="text-accent">+91</span> 70241 28029
            </a>
            <a href="mailto:vijaytiwari@orbitengineerings.com" className="text-muted-foreground hover:text-accent text-sm break-all transition-colors block">
              vijaytiwari@orbitengineerings.com
            </a>
            <div className="pt-4">
              <div className="p-4 rounded-xl glass border border-border">
                <p className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs text-foreground font-medium">Global Operations Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} AI SmartSyS. Engineered for Excellence.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground text-[10px] uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-[10px] uppercase tracking-widest">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
