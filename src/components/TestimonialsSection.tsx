import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  { name: "Priya Sharma", role: "CEO, TechVentures", text: "AI SmartSyS transformed our operations with their automation solutions. Highly recommended!" },
  { name: "Rajesh Kumar", role: "CTO, DataFlow Inc.", text: "The AI chatbot they built increased our customer satisfaction by 60%. Exceptional work." },
  { name: "Anita Desai", role: "Founder, GreenLeaf", text: "Professional, innovative, and always ahead of the curve. A truly reliable AI partner." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-muted/40">
    <div className="container mx-auto">
      <SectionHeader badge="Testimonials" title="What Our Clients Say" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={t.name} className="p-6 rounded-2xl bg-card border border-border shadow-card hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
