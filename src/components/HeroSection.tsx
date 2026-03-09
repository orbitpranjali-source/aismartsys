import { Button } from "@/components/ui/button";
import { GlowOrb } from "./TechPattern";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Decorative elements */}
      <GlowOrb className="w-72 h-72 top-1/4 -left-20 animate-float" color="accent" />
      <GlowOrb className="w-96 h-96 bottom-1/4 -right-24 animate-float" color="primary" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-medium tracking-[0.25em] uppercase text-xs md:text-sm mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            ✦ AI-Powered Innovation ✦
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Smart AI Solutions for a{" "}
            <span className="text-accent relative">
              Smarter Future
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" className="animate-pulse-glow" />
              </svg>
            </span>
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            AI SmartSyS provides cutting-edge AI tools, intelligent automation, and smart digital solutions to transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" className="text-base px-10 py-6 rounded-xl">
              Get Started
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-10 py-6 rounded-xl">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
