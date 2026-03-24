import { CheckCircle2, Target, Eye, Rocket, Server, Cpu, Cloud, Code, Sparkles, Activity, Layers } from "lucide-react";

const AboutSection = () => {
  const glassCardClass = "bg-gradient-nav-pill backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-primary/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center";
  const glassCardSecondaryClass = "bg-gradient-nav-pill backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-secondary/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center";
  const glassCardAccentClass = "bg-gradient-nav-pill backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-accent/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center";

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Hero Title */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-foreground tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">AI SmartSyS</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Building <span className="text-foreground font-medium">intelligent AI solutions</span> for modern businesses.
        </p>
      </div>

      {/* Company Introduction */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center reveal-on-scroll">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Are</span>
          </h3>
          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
            AI SmartSyS is a <span className="text-foreground font-medium">technology-driven company</span> focused on developing <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary font-medium">AI-powered solutions</span>,{" "}
            automation systems, and smart digital platforms to help businesses accelerate growth and efficiency.
          </p>
        </div>
      </div>

      {/* Bento Grid: Mission, Vision, Philosophy */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Mission */}
          <div className={`${glassCardClass} p-8 reveal-on-scroll`}>
            <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 border border-white/30 shadow-lg">
              <Target className="text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Our Mission</h4>
            <p className="text-white/80 leading-relaxed font-medium">
              To empower businesses globally with innovative <span className="text-white">AI and automation technologies</span> that drive meaningful transformation.
            </p>
          </div>

          {/* Vision */}
          <div className={`${glassCardSecondaryClass} p-8 reveal-on-scroll transition-delay-100`}>
            <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 border border-white/30 shadow-lg">
              <Eye className="text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Our Vision</h4>
            <p className="text-white/80 leading-relaxed font-medium">
              To become the premier leading provider of <span className="text-white">AI-driven digital transformation</span> solutions across diverse industries.
            </p>
          </div>

          {/* Philosophy */}
          <div className={`${glassCardAccentClass} p-8 reveal-on-scroll transition-delay-200`}>
            <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 border border-white/30 shadow-lg">
              <Sparkles className="text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Our Philosophy</h4>
            <p className="text-white/80 leading-relaxed font-medium">
              We believe in creating intelligent, scalable systems that <span className="text-white">augment human capabilities</span> rather than replace them.
            </p>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24 border-t border-foreground/10 pt-16">
          <div className="flex flex-col items-center justify-center p-6 text-center reveal-on-scroll">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full" />
              <Layers className="relative text-primary" size={48} />
            </div>
            <h4 className="text-5xl md:text-6xl font-black mb-3 tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">150+</h4>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-sm hidden md:block">Solutions Deployed</p>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.1em] text-sm md:hidden">Deployed</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-center reveal-on-scroll transition-delay-100">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-secondary/40 blur-2xl rounded-full" />
              <Activity className="relative text-secondary" size={48} />
            </div>
            <h4 className="text-5xl md:text-6xl font-black mb-3 tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">25+</h4>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-sm hidden md:block">Industries Served</p>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.1em] text-sm md:hidden">Industries</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 text-center reveal-on-scroll transition-delay-200">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-accent/40 blur-2xl rounded-full" />
              <Target className="relative text-accent" size={48} />
            </div>
            <h4 className="text-5xl md:text-6xl font-black mb-3 tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">99.9%</h4>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-sm hidden md:block">System Accuracy</p>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.1em] text-sm md:hidden">Accuracy</p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h3 className="text-3xl font-bold mb-12 reveal-on-scroll text-foreground">Our Expertise</h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 reveal-on-scroll max-w-6xl mx-auto">
          {[
            { title: "AI Development", icon: Cpu, color: "text-primary", borderHover: "hover:border-primary/50" },
            { title: "Web Development", icon: Code, color: "text-secondary", borderHover: "hover:border-secondary/50" },
            { title: "Automation", icon: Rocket, color: "text-accent", borderHover: "hover:border-accent/50" },
            { title: "Cloud & Server", icon: Cloud, color: "text-primary", borderHover: "hover:border-primary/50" },
            { title: "SCADA Solutions", icon: Server, color: "text-secondary", borderHover: "hover:border-secondary/50" },
          ].map((service, index) => (
            <div key={index} className="bg-gradient-nav-pill backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
              <div className="p-4 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <service.icon className="text-white" size={32} />
              </div>
              <h4 className="font-semibold text-white text-sm md:text-base">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center reveal-on-scroll text-foreground">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 reveal-on-scroll">
            {[
              "Experienced & Specialized Team",
              "Modern & Scalable Technology",
              "Reliable & Secure Solutions",
              "Customer Focused Approach"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-nav-pill border border-white/10 backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CheckCircle2 className="text-white shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" size={24} />
                <span className="text-lg font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
