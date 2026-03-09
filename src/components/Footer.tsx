import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import orbitLogo from "@/assets/orbit-logo.png";

const quickLinks = ["Home", "Services", "Products", "Portfolio", "FAQ", "Contact"];
const serviceLinks = ["AI Development", "Web Development", "Automation", "Chatbot Development", "Data Analytics", "Mobile Apps"];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={orbitLogo} alt="AI SmartSyS" className="h-8 w-8 brightness-200" />
            <span className="font-heading text-lg font-bold">AI SmartSyS</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Empowering businesses with intelligent AI solutions for a smarter, more connected future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2">
            {serviceLinks.map((link) => (
              <li key={link}>
                <span className="text-primary-foreground/60 text-sm">{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <p className="text-primary-foreground/60 text-sm mb-1">+91 70241 28029</p>
          <p className="text-primary-foreground/60 text-sm mb-4">vijaytiwari@orbitengineerings.com</p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} AI SmartSyS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
