import { Brain, Globe, Zap, MessageSquare, BarChart3, Smartphone } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import SectionHeader from "./SectionHeader";

const services = [
  { icon: Brain, title: "AI Development", desc: "Custom AI models and intelligent systems tailored to your business needs." },
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications with cutting-edge technologies." },
  { icon: Zap, title: "Automation Solutions", desc: "Streamline workflows with AI-powered automation and process optimization." },
  { icon: MessageSquare, title: "AI Chatbot Development", desc: "Intelligent conversational AI bots for customer engagement." },
  { icon: BarChart3, title: "Data Analytics", desc: "Transform raw data into actionable insights with advanced analytics." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile apps with seamless user experiences." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container mx-auto">
      <SectionHeader badge="Our Services" title="What We Offer" description="Empowering businesses with intelligent solutions across AI, web, and mobile." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover-lift cursor-pointer animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <AnimatedIcon><s.icon size={24} /></AnimatedIcon>
            <h3 className="font-heading font-semibold text-lg text-foreground mt-4 mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
