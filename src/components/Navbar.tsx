import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import orbitLogo from "@/assets/orbit-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src={orbitLogo} alt="AI SmartSyS Logo" className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
          <span className="font-heading text-lg font-bold text-foreground">
            AI <span className="text-gradient-primary">SmartSyS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-muted/40 backdrop-blur-sm border border-border/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href
                  ? "bg-gradient-nav-pill text-secondary-foreground shadow-md shadow-primary/25 scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button size="sm" className="hidden md:inline-flex rounded-full px-6 bg-gradient-nav-pill text-secondary-foreground shadow-md shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
          Get Started
        </Button>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in-up">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeSection === link.href
                    ? "bg-gradient-nav-pill text-secondary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="w-fit rounded-full px-6 mt-3 bg-gradient-nav-pill text-secondary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
