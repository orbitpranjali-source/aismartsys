import { Type, FileText, Image, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import heroNeural from "@/assets/images/hero-neural.png";
import heroBrain from "@/assets/images/hero-brain.png";
import heroAutomation from "@/assets/images/hero-automation.png";
import heroData from "@/assets/images/hero-data.png";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

const products = [
  {
    id: "caption",
    icon: Type,
    title: "AI Caption Generator",
    desc: "Generate engaging social media captions instantly with AI-powered creativity.",
    glow: "glow-blue",
    image: heroNeural
  },
  {
    id: "resume",
    icon: FileText,
    title: "AI Resume Builder",
    desc: "Create professional, ATS-optimized resumes in minutes with smart AI assistance.",
    glow: "glow-purple",
    image: heroBrain
  },
  {
    id: "image",
    icon: Image,
    title: "AI Image Generator",
    desc: "Transform text prompts into stunning visuals with advanced image generation.",
    glow: "glow-cyan",
    image: heroData
  },
  {
    id: "chatbot",
    icon: Bot,
    title: "AI Chatbot Builder",
    desc: "Build and deploy intelligent chatbots without code for any platform.",
    glow: "glow-blue",
    image: heroAutomation
  },
];

const ProductsSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(products.length, 100);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);

  const handleExplore = (toolId: string) => {
    if (isAuthenticated) {
      navigate(`/dashboard?tool=${toolId}`);
    } else {
      setSelectedToolId(toolId);
      setIsAuthModalOpen(true);
    }
  };

  return (
    <section id="products" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <GlowOrb className="w-[500px] h-[500px] -bottom-60 right-1/4" color="primary" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Our Products" title="AI-Powered Products" description="Ready-to-use AI tools designed to boost productivity and creativity." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={p.title}
              className={`group premium-card transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={getDelay(i)}
            >
              <div className="h-32 bg-muted/30 relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-gradient-button group-hover:text-secondary-foreground transition-all duration-500 group-hover:${p.glow}`}>
                    <p.icon size={24} />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-xs mb-6 leading-relaxed line-clamp-2">{p.desc}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleExplore(p.id)}
                  className="rounded-full text-primary hover:text-accent h-8 px-4 text-xs group/btn"
                >
                  Explore <ArrowRight size={12} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => navigate(`/dashboard?tool=${selectedToolId}`)}
      />
    </section>
  );
};

export default ProductsSection;
