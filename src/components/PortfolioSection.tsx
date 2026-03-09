import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "AI Chatbot for E-commerce",
    desc: "Conversational AI assistant boosting customer engagement and sales by 40%.",
    tags: ["NLP", "React", "Python"],
  },
  {
    title: "AI Automation Dashboard",
    desc: "Real-time analytics and workflow automation platform for enterprise operations.",
    tags: ["Dashboard", "ML", "Cloud"],
  },
  {
    title: "AI Marketing Tool",
    desc: "Smart campaign generator with predictive analytics and audience segmentation.",
    tags: ["Marketing", "AI", "Analytics"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="container mx-auto">
      <SectionHeader badge="Portfolio" title="Our Recent Work" description="Real-world AI solutions delivering measurable impact." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={p.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="h-48 bg-gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground/50 text-6xl font-heading font-bold">0{i + 1}</span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">{t}</span>
                ))}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                View Project <ExternalLink size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
