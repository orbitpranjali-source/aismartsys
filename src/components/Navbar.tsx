import { useState, useEffect } from "react";
import { Menu, X, Layout, LogOut, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import aiLogo from "@/assets/images/smartsys-logo.jpg";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import InquiryModal from "./InquiryModal";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
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
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((l) => l.href.includes("#") ? l.href.split("#")[1] : null)
        .filter(Boolean);

      let current = "home";
      for (const id of sections) {
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(`#${current}`);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuthAction = () => {
    setIsInquiryModalOpen(true);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/10 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-background/40"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-24 px-4 transition-all duration-300">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-3xl border-2 border-primary/30 shadow-2xl group-hover:scale-110 transition-all duration-600 ease-out">
            <img src={aiLogo} alt="AI SmartSyS Logo" className="h-full w-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-3xl sm:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary/90 tracking-tighter leading-none">
              AI SmartSyS
            </span>
            <span className="text-[10px] sm:text-[12px] font-bold text-primary/70 tracking-[0.3em] uppercase mt-1 hidden xs:block">
              Intelligent Solutions
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-muted/40 backdrop-blur-sm border border-border/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === link.href || (link.href.includes("#") && activeSection === "#" + link.href.split("#")[1])
                ? "bg-gradient-nav-pill text-secondary-foreground shadow-md shadow-primary/25 scale-[1.02]"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="icon" variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full hover:bg-muted/50 text-foreground transition-all duration-300">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          {isAuthenticated ? (
            <>
              <Button size="sm" onClick={() => navigate("/dashboard")} className="rounded-full px-6 bg-muted/50 text-foreground hover:bg-muted border border-white/5 transition-all duration-300">
                <Layout size={16} className="mr-2" /> Dashboard
              </Button>
              <Button size="icon" variant="ghost" onClick={logout} className="rounded-full hover:bg-red-500/10 hover:text-red-400">
                <LogOut size={18} />
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={handleAuthAction} className="rounded-full px-6 bg-gradient-nav-pill text-secondary-foreground shadow-md shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              Get Started
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="flex justify-end items-center gap-2 md:hidden">
          <Button size="icon" variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full hover:bg-muted/50 text-foreground transition-all duration-300">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <button className="text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
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
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${activeSection === link.href || (link.href.includes("#") && activeSection === "#" + link.href.split("#")[1])
                  ? "bg-gradient-nav-pill text-secondary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5 mt-2 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Button size="sm" onClick={() => { setIsOpen(false); navigate("/dashboard"); }} className="w-full rounded-xl bg-muted/50">
                    Dashboard
                  </Button>
                  <Button size="sm" onClick={() => { setIsOpen(false); logout(); }} variant="ghost" className="w-full rounded-xl text-red-400">
                    Logout
                  </Button>
                </>
              ) : (
                <Button size="sm" onClick={handleAuthAction} className="w-full rounded-xl bg-gradient-primary">
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        title="Get Started"
        description="Fill out the form below to start your AI journey with us."
      />
    </nav>
  );
};

export default Navbar;
