import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Priya Sharma", role: "CEO, TechVentures", text: "AI SmartSyS transformed our operations with their automation solutions. Highly recommended!", initials: "PS" },
  { name: "Rajesh Kumar", role: "CTO, DataFlow Inc.", text: "The AI chatbot they built increased our customer satisfaction by 60%. Exceptional work.", initials: "RK" },
  { name: "Anita Desai", role: "Founder, GreenLeaf", text: "Professional, innovative, and always ahead of the curve. A truly reliable AI partner.", initials: "AD" },
];

const TestimonialsSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(testimonials.length, 120);

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-muted/20" />
      <GlowOrb className="w-[400px] h-[400px] top-0 -right-40" color="accent" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Testimonials" title="What Our Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative p-8 premium-card transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={getDelay(i)}
            >
              <Quote size={32} className="text-primary/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-secondary-foreground font-heading font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
