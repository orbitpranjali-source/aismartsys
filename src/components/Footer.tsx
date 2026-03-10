import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import orbitLogo from "@/assets/orbit-logo.png";

const quickLinks = ["Home", "Services", "Products", "Portfolio", "FAQ", "Contact"];
const serviceLinks = ["AI Development", "Web Development", "Automation", "Chatbot Development", "Data Analytics", "Mobile Apps"];

const Footer = () => (
  <footer className="relative border-t border-border pt-16 pb-8 overflow-hidden">
    <div className="absolute inset-0 bg-muted/50" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={orbitLogo} alt="AI SmartSyS" className="h-8 w-8" />
            <span className="font-heading text-lg font-bold text-foreground">AI SmartSyS</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Empowering businesses with intelligent AI solutions for a smarter, more connected future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link}>
                <span className="text-muted-foreground text-sm">{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-foreground">Contact</h4>
          <p className="text-muted-foreground text-sm mb-1">+91 70241 28029</p>
          <p className="text-muted-foreground text-sm mb-4">vijaytiwari@orbitengineerings.com</p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} AI SmartSyS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
