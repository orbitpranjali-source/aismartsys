import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const steps = [
  { icon: Search, title: "Discovery", desc: "We analyze your needs and define project scope." },
  { icon: Lightbulb, title: "Strategy", desc: "We design a tailored AI-powered solution." },
  { icon: Code, title: "Development", desc: "Agile sprints bring your solution to life." },
  { icon: Rocket, title: "Launch", desc: "Deploy, monitor, and continuously optimize." },
];

const OurProcess = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(steps.length, 150);

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Our Process" title="How We Work" description="A streamlined approach from concept to deployment." />
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px">
            <div className={`h-full bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30 transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative text-center transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={getDelay(i)}
              >
                <div className="relative z-10 w-28 h-28 mx-auto rounded-full premium-card flex items-center justify-center text-primary mb-6 group">
                  <s.icon size={32} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-button text-secondary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-secondary/20">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mt-2 mb-2 text-lg">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
