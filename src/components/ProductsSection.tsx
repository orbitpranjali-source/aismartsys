import { Type, FileText, Image, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedIcon from "./AnimatedIcon";
import SectionHeader from "./SectionHeader";

const products = [
  { icon: Type, title: "AI Caption Generator", desc: "Generate engaging social media captions instantly with AI-powered creativity." },
  { icon: FileText, title: "AI Resume Builder", desc: "Create professional, ATS-optimized resumes in minutes with smart AI assistance." },
  { icon: Image, title: "AI Image Generator", desc: "Transform text prompts into stunning visuals with advanced image generation." },
  { icon: Bot, title: "AI Chatbot Builder", desc: "Build and deploy intelligent chatbots without code for any platform." },
];

const ProductsSection = () => (
  <section id="products" className="section-padding bg-muted/40">
    <div className="container mx-auto">
      <SectionHeader badge="Our Products" title="AI-Powered Products" description="Ready-to-use AI tools designed to boost productivity and creativity." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={p.title} className="group p-6 rounded-2xl bg-card border border-border shadow-card hover-lift text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex justify-center mb-4">
              <AnimatedIcon><p.icon size={24} /></AnimatedIcon>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
            <Button variant="accent" size="sm">Learn More</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
