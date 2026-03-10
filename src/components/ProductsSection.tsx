import { Type, FileText, Image, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const products = [
  { icon: Type, title: "AI Caption Generator", desc: "Generate engaging social media captions instantly with AI-powered creativity.", glow: "glow-blue" },
  { icon: FileText, title: "AI Resume Builder", desc: "Create professional, ATS-optimized resumes in minutes with smart AI assistance.", glow: "glow-purple" },
  { icon: Image, title: "AI Image Generator", desc: "Transform text prompts into stunning visuals with advanced image generation.", glow: "glow-cyan" },
  { icon: Bot, title: "AI Chatbot Builder", desc: "Build and deploy intelligent chatbots without code for any platform.", glow: "glow-blue" },
];

const ProductsSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(products.length, 100);

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
              className={`group p-8 premium-card text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={getDelay(i)}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-gradient-button group-hover:text-secondary-foreground transition-all duration-500 group-hover:${p.glow}`}>
                <p.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{p.desc}</p>
              <Button variant="ghost" size="sm" className="rounded-full text-primary hover:text-accent group/btn">
                Learn More <ArrowRight size={14} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
