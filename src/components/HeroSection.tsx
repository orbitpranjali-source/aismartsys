import { Button } from "@/components/ui/button";
import { GlowOrb } from "./TechPattern";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroNeural from "@/assets/images/hero-neural.png";
import heroBrain from "@/assets/images/hero-brain.png";
import heroData from "@/assets/images/hero-data.png";
import heroAutomation from "@/assets/images/hero-automation.png";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const slides = [
    // ... (stays same)
    {
      image: heroNeural,
      title: "AI Neural Network"
    },
    {
      image: heroBrain,
      title: "Artificial Intelligence Brain"
    },
    {
      image: heroData,
      title: "Digital Data Visualization"
    },
    {
      image: heroAutomation,
      title: "AI Powered Automation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="opacity-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-connection-cloud-23000-large.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay" />
      </div>

      {/* Hero Image Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-30 scale-105" : "opacity-0 scale-100"
              }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 1s ease-in-out, transform 4s linear'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] z-[1]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glowing orbs */}
      <GlowOrb className="w-[700px] h-[700px] top-1/4 -left-60 animate-float z-[1]" color="primary" />
      <GlowOrb className="w-[800px] h-[800px] bottom-1/4 -right-60 animate-float z-[1]" color="secondary" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="reveal-on-scroll active">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              AI-Powered Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-8 leading-[1.08] tracking-tight">
              Smart AI Solutions{" "}
              <span className="text-gradient-primary">for a Smarter</span>{" "}
              Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              AI SmartSyS provides cutting-edge AI tools, intelligent automation, and smart digital solutions to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={handleGetStarted} className="text-base px-8 py-6 rounded-xl group">
                Get Started
                <ArrowRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg" onClick={scrollToContact} className="text-base px-8 py-6 rounded-xl">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right: Floating AI Visual */}
          <div className="relative flex items-center justify-center floating-element">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden glass-card border-accent/20 shadow-2xl">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 glass-card flex items-center justify-center animate-pulse-glow">
                <div className="text-accent text-xs font-bold text-center">AI<br />ENGINE</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-16 glass-card flex items-center justify-center">
                <div className="text-primary text-xs font-bold text-center">99.9%<br />ACCURACY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => navigate("/dashboard")}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/15 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
