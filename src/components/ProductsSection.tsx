import { Type, FileText, Image, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedIcon from "./AnimatedIcon";
import SectionHeader from "./SectionHeader";
import { HexGrid, GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const products = [
  { icon: Type, title: "AI Caption Generator", desc: "Generate engaging social media captions instantly with AI-powered creativity." },
  { icon: FileText, title: "AI Resume Builder", desc: "Create professional, ATS-optimized resumes in minutes with smart AI assistance." },
  { icon: Image, title: "AI Image Generator", desc: "Transform text prompts into stunning visuals with advanced image generation." },
  { icon: Bot, title: "AI Chatbot Builder", desc: "Build and deploy intelligent chatbots without code for any platform." },
];

const ProductsSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(products.length, 100);

  return (
    <section id="products" className="relative section-padding bg-muted/40 overflow-hidden">
      <HexGrid className="bottom-0 left-0 text-primary" />
      <GlowOrb className="w-80 h-80 -bottom-40 right-1/4" color="primary" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Our Products" title="AI-Powered Products" description="Ready-to-use AI tools designed to boost productivity and creativity." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div
              key={p.title}
              className={`group p-8 rounded-2xl bg-card border border-border shadow-card hover-lift text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={getDelay(i)}
            >
              <div className="flex justify-center mb-5">
                <AnimatedIcon><p.icon size={24} /></AnimatedIcon>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{p.desc}</p>
              <Button variant="accent" size="sm" className="rounded-lg">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
