import { Button } from "@/components/ui/button";
import { GlowOrb } from "./TechPattern";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Glowing orbs — more diffuse */}
      <GlowOrb className="w-[700px] h-[700px] top-1/4 -left-60 animate-float" color="primary" />
      <GlowOrb className="w-[800px] h-[800px] bottom-1/4 -right-60 animate-float" color="secondary" />
      <GlowOrb className="w-[400px] h-[400px] top-20 right-1/4 animate-pulse-glow" color="accent" />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            background: `hsl(${[217, 263, 187][i % 3]} ${[91, 70, 92][i % 3]}% ${[60, 50, 53][i % 3]}% / 0.4)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle ${8 + Math.random() * 12}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              AI-Powered Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-8 leading-[1.08] tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Smart AI Solutions{" "}
              <span className="text-gradient-primary">for a Smarter</span>{" "}
              Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              AI SmartSyS provides cutting-edge AI tools, intelligent automation, and smart digital solutions to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-xl group">
                Get Started
                <ArrowRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 rounded-xl">
                Contact Us
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex -space-x-2">
                {["PS", "RK", "AD", "VT"].map((initials, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-secondary-foreground text-xs font-bold border-2 border-background">
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Trusted by 100+ companies</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI Globe */}
          <div className="relative flex items-center justify-center animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/15 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-secondary/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
              <div className="absolute inset-12 rounded-full border border-accent/10" />

              {/* Core globe */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/15 via-secondary/8 to-accent/15 backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 rounded-full" style={{
                  background: 'radial-gradient(circle at 30% 30%, hsl(217 91% 60% / 0.25), transparent 60%)',
                }} />
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle cx="100" cy="50" r="3" fill="hsl(187 92% 53%)" className="animate-pulse-glow" />
                  <circle cx="150" cy="80" r="2.5" fill="hsl(217 91% 60%)" className="animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
                  <circle cx="140" cy="130" r="3" fill="hsl(263 70% 50%)" className="animate-pulse-glow" style={{ animationDelay: "1s" }} />
                  <circle cx="100" cy="155" r="2" fill="hsl(187 92% 53%)" className="animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                  <circle cx="60" cy="130" r="2.5" fill="hsl(217 91% 60%)" className="animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
                  <circle cx="55" cy="75" r="3" fill="hsl(263 70% 50%)" className="animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
                  <circle cx="100" cy="100" r="4" fill="hsl(187 92% 53%)" />
                  <line x1="100" y1="100" x2="100" y2="50" stroke="hsl(187 92% 53% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="150" y2="80" stroke="hsl(217 91% 60% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="140" y2="130" stroke="hsl(263 70% 50% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="100" y2="155" stroke="hsl(187 92% 53% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="60" y2="130" stroke="hsl(217 91% 60% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="55" y2="75" stroke="hsl(263 70% 50% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="50" x2="150" y2="80" stroke="hsl(217 91% 60% / 0.12)" strokeWidth="0.5" />
                  <line x1="150" y1="80" x2="140" y2="130" stroke="hsl(263 70% 50% / 0.12)" strokeWidth="0.5" />
                  <line x1="140" y1="130" x2="100" y2="155" stroke="hsl(187 92% 53% / 0.12)" strokeWidth="0.5" />
                  <line x1="100" y1="155" x2="60" y2="130" stroke="hsl(217 91% 60% / 0.12)" strokeWidth="0.5" />
                  <line x1="60" y1="130" x2="55" y2="75" stroke="hsl(263 70% 50% / 0.12)" strokeWidth="0.5" />
                  <line x1="55" y1="75" x2="100" y2="50" stroke="hsl(187 92% 53% / 0.12)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent glow-cyan animate-spin-slow" style={{ transformOrigin: "50% 210px" }} />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary glow-blue animate-spin-slow" style={{ transformOrigin: "50% 180px", animationDirection: "reverse", animationDuration: "15s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-foreground/15 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
