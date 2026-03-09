import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  { icon: Search, title: "Discovery", desc: "We analyze your needs and define project scope." },
  { icon: Lightbulb, title: "Strategy", desc: "We design a tailored AI-powered solution." },
  { icon: Code, title: "Development", desc: "Agile sprints bring your solution to life." },
  { icon: Rocket, title: "Launch", desc: "Deploy, monitor, and continuously optimize." },
];

const OurProcess = () => (
  <section className="section-padding bg-muted/40">
    <div className="container mx-auto">
      <SectionHeader badge="Our Process" title="How We Work" description="A streamlined approach from concept to deployment." />
      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-border" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-card border-2 border-primary/30 flex items-center justify-center text-primary mb-4 shadow-card">
                <s.icon size={32} />
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">Step {i + 1}</span>
              <h3 className="font-heading font-semibold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurProcess;
