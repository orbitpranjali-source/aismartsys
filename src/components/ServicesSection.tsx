import { Brain, Globe, Zap, MessageSquare, BarChart3, Smartphone } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import SectionHeader from "./SectionHeader";
import { CircuitPattern, GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Brain, title: "AI Development", desc: "Custom AI models and intelligent systems tailored to your business needs." },
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications with cutting-edge technologies." },
  { icon: Zap, title: "Automation Solutions", desc: "Streamline workflows with AI-powered automation and process optimization." },
  { icon: MessageSquare, title: "AI Chatbot Development", desc: "Intelligent conversational AI bots for customer engagement." },
  { icon: BarChart3, title: "Data Analytics", desc: "Transform raw data into actionable insights with advanced analytics." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile apps with seamless user experiences." },
];

const ServicesSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(services.length, 80);

  return (
    <section id="services" className="relative section-padding bg-background overflow-hidden">
      <CircuitPattern className="top-0 right-0 text-primary" />
      <GlowOrb className="w-64 h-64 -top-32 -right-32" color="accent" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Our Services" title="What We Offer" description="Empowering businesses with intelligent solutions across AI, web, and mobile." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group p-8 rounded-2xl bg-card border border-border shadow-card hover-lift cursor-pointer transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={getDelay(i)}
            >
              <AnimatedIcon><s.icon size={24} /></AnimatedIcon>
              <h3 className="font-heading font-semibold text-lg text-foreground mt-5 mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
