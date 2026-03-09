import { Shield, Clock, Users, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { GridDots, GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and security protocols protect your data.", color: "text-primary" },
  { icon: Clock, title: "Fast Delivery", desc: "Agile development ensures rapid, on-time project completion.", color: "text-accent" },
  { icon: Users, title: "Expert Team", desc: "Seasoned AI engineers and developers with deep domain expertise.", color: "text-secondary" },
  { icon: Award, title: "Proven Results", desc: "Track record of delivering impactful solutions for 100+ clients.", color: "text-primary" },
];

const WhyChooseUs = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(reasons.length, 100);

  return (
    <section className="relative section-padding bg-background overflow-hidden">
      <GridDots className="top-10 left-10 text-foreground" />
      <GlowOrb className="w-56 h-56 top-1/2 -left-28" color="primary" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Why Us" title="Why Choose AI SmartSyS" description="We combine innovation with reliability to deliver exceptional results." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group text-center p-8 rounded-2xl bg-card border border-border shadow-card hover-lift transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={getDelay(i)}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center ${r.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <r.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
