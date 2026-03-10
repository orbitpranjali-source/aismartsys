import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import orbitLogo from "@/assets/orbit-logo.png";

const quickLinks = ["Home", "Services", "Products", "Portfolio", "FAQ", "Contact"];
const serviceLinks = ["AI Development", "Web Development", "Automation", "Chatbot Development", "Data Analytics", "Mobile Apps"];

const Footer = () => (
  <footer className="relative border-t border-border pt-20 pb-8 overflow-hidden">
    <div className="absolute inset-0 bg-muted/30" />
    {/* Top gradient line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <img src={orbitLogo} alt="AI SmartSyS" className="h-8 w-8" />
            <span className="font-heading text-lg font-bold text-foreground">AI SmartSyS</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Empowering businesses with intelligent AI solutions for a smarter, more connected future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-widest text-foreground">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-widest text-foreground">Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link}>
                <span className="text-muted-foreground text-sm">{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-widest text-foreground">Contact</h4>
          <p className="text-muted-foreground text-sm mb-1">+91 70241 28029</p>
          <p className="text-muted-foreground text-sm mb-5">vijaytiwari@orbitengineerings.com</p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all duration-300 hover:scale-110">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} AI SmartSyS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
