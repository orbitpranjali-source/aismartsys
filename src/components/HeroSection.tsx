import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            AI-Powered Innovation
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Smart AI Solutions for a{" "}
            <span className="text-accent">Smarter Future</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            AI SmartSyS provides cutting-edge AI tools, intelligent automation, and smart digital solutions to transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Get Started
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-accent/10 blur-xl animate-float" />
        <div className="absolute bottom-1/3 right-16 w-32 h-32 rounded-full bg-primary/10 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
};

export default HeroSection;
