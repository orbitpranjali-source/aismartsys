import { Brain, Globe, Zap, MessageSquare, BarChart3, Smartphone } from "lucide-react";
import serviceAi from "@/assets/images/service-ai.png";
import serviceChatbot from "@/assets/images/service-chatbot.png";
import heroNeural from "@/assets/images/hero-neural.png";
import heroData from "@/assets/images/hero-data.png";
import heroAutomation from "@/assets/images/hero-automation.png";
import heroBrain from "@/assets/images/hero-brain.png";
import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

const services = [
  {
    ref: "ai-development",
    icon: Brain,
    title: "AI Development",
    desc: "Custom AI models and intelligent systems tailored to your business needs.",
    image: serviceAi
  },
  {
    ref: "web-development",
    icon: Globe,
    title: "Web Development",
    desc: "Modern, responsive web applications with cutting-edge technologies.",
    image: heroNeural
  },
  {
    ref: "automation-solutions",
    icon: Zap,
    title: "Automation Solutions",
    desc: "Streamline workflows with AI-powered automation and process optimization.",
    image: heroAutomation
  },
  {
    ref: "ai-chatbot",
    icon: MessageSquare,
    title: "AI Chatbot",
    desc: "Intelligent conversational AI bots for customer engagement.",
    image: serviceChatbot
  },
  {
    ref: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with advanced analytics.",
    image: heroData
  },
  {
    ref: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform mobile apps with seamless user experiences.",
    image: heroBrain
  },
];

const ServicesSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(services.length, 80);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleServiceClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background Video */}
      <div className="video-container opacity-20">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-animation-1552-large.mp4" type="video/mp4" />
        </video>
      </div>

      <GlowOrb className="w-[500px] h-[500px] -top-60 -right-60" color="primary" />
      <GlowOrb className="w-[400px] h-[400px] bottom-0 -left-40" color="secondary" />

      {/* Separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Our Services" title="What We Offer" description="Empowering businesses with intelligent solutions across AI, web, and mobile." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              id={s.ref}
              onClick={handleServiceClick}
              className={`group premium-card cursor-pointer transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={getDelay(i)}
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent">
                    <s.icon size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8 pt-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center text-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <Zap size={12} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => navigate("/dashboard")}
      />
    </section>
  );
};

export default ServicesSection;
