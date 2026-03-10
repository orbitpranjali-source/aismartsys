import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "AI Chatbot for E-commerce",
    desc: "Conversational AI assistant boosting customer engagement and sales by 40%.",
    tags: ["NLP", "React", "Python"],
    gradient: "from-primary/50 to-secondary/50",
  },
  {
    title: "AI Automation Dashboard",
    desc: "Real-time analytics and workflow automation platform for enterprise operations.",
    tags: ["Dashboard", "ML", "Cloud"],
    gradient: "from-secondary/50 to-accent/30",
  },
  {
    title: "AI Marketing Tool",
    desc: "Smart campaign generator with predictive analytics and audience segmentation.",
    tags: ["Marketing", "AI", "Analytics"],
    gradient: "from-accent/30 to-primary/50",
  },
];

const PortfolioSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(projects.length, 120);

  return (
    <section id="portfolio" className="relative section-padding overflow-hidden">
      <GlowOrb className="w-[400px] h-[400px] top-0 -left-40" color="secondary" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Portfolio" title="Our Recent Work" description="Real-world AI solutions delivering measurable impact." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group premium-card overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={getDelay(i)}
            >
              <div className={`relative h-52 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                <span className="text-foreground/8 text-8xl font-heading font-bold group-hover:scale-110 transition-transform duration-700">
                  0{i + 1}
                </span>
                <div className="absolute inset-0 opacity-[0.06]" style={{
                  backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }} />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full glass text-accent">{t}</span>
                  ))}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.desc}</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent p-0 h-auto group/btn">
                  View Project <ExternalLink size={14} className="ml-1.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
