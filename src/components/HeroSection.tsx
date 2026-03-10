import { Button } from "@/components/ui/button";
import { GlowOrb } from "./TechPattern";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* Glowing orbs */}
      <GlowOrb className="w-[500px] h-[500px] top-1/4 -left-40 animate-float" color="primary" />
      <GlowOrb className="w-[600px] h-[600px] bottom-1/4 -right-48 animate-float" color="secondary" />
      <GlowOrb className="w-72 h-72 top-10 right-1/4 animate-pulse-glow" color="accent" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `particle ${8 + Math.random() * 12}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              AI-Powered Innovation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Smart AI Solutions{" "}
              <span className="text-gradient-primary">for a Smarter</span>{" "}
              Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              AI SmartSyS provides cutting-edge AI tools, intelligent automation, and smart digital solutions to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" className="text-base px-8 py-6 rounded-xl">
                Get Started
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 rounded-xl">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right: AI Globe Illustration */}
          <div className="relative flex items-center justify-center animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
              <div className="absolute inset-8 rounded-full border border-accent/15" />

              {/* Core globe */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 rounded-full" style={{
                  background: 'radial-gradient(circle at 30% 30%, hsl(217 91% 60% / 0.3), transparent 60%)',
                }} />
                {/* Network nodes */}
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle cx="100" cy="50" r="3" fill="hsl(187 92% 53%)" className="animate-pulse-glow" />
                  <circle cx="150" cy="80" r="2.5" fill="hsl(217 91% 60%)" className="animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
                  <circle cx="140" cy="130" r="3" fill="hsl(263 70% 50%)" className="animate-pulse-glow" style={{ animationDelay: "1s" }} />
                  <circle cx="100" cy="155" r="2" fill="hsl(187 92% 53%)" className="animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
                  <circle cx="60" cy="130" r="2.5" fill="hsl(217 91% 60%)" className="animate-pulse-glow" style={{ animationDelay: "0.7s" }} />
                  <circle cx="55" cy="75" r="3" fill="hsl(263 70% 50%)" className="animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
                  <circle cx="100" cy="100" r="4" fill="hsl(187 92% 53%)" />
                  {/* Lines */}
                  <line x1="100" y1="100" x2="100" y2="50" stroke="hsl(187 92% 53% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="150" y2="80" stroke="hsl(217 91% 60% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="140" y2="130" stroke="hsl(263 70% 50% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="100" y2="155" stroke="hsl(187 92% 53% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="60" y2="130" stroke="hsl(217 91% 60% / 0.3)" strokeWidth="0.5" />
                  <line x1="100" y1="100" x2="55" y2="75" stroke="hsl(263 70% 50% / 0.3)" strokeWidth="0.5" />
                  {/* Outer connections */}
                  <line x1="100" y1="50" x2="150" y2="80" stroke="hsl(217 91% 60% / 0.15)" strokeWidth="0.5" />
                  <line x1="150" y1="80" x2="140" y2="130" stroke="hsl(263 70% 50% / 0.15)" strokeWidth="0.5" />
                  <line x1="140" y1="130" x2="100" y2="155" stroke="hsl(187 92% 53% / 0.15)" strokeWidth="0.5" />
                  <line x1="100" y1="155" x2="60" y2="130" stroke="hsl(217 91% 60% / 0.15)" strokeWidth="0.5" />
                  <line x1="60" y1="130" x2="55" y2="75" stroke="hsl(263 70% 50% / 0.15)" strokeWidth="0.5" />
                  <line x1="55" y1="75" x2="100" y2="50" stroke="hsl(187 92% 53% / 0.15)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent glow-cyan animate-spin-slow" style={{ transformOrigin: "50% 192px" }} />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary glow-blue animate-spin-slow" style={{ transformOrigin: "50% 160px", animationDirection: "reverse", animationDuration: "15s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
