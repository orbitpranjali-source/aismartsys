import { Shield, Clock, Users, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const reasons = [
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and security protocols protect your data." },
  { icon: Clock, title: "Fast Delivery", desc: "Agile development ensures rapid, on-time project completion." },
  { icon: Users, title: "Expert Team", desc: "Seasoned AI engineers and developers with deep domain expertise." },
  { icon: Award, title: "Proven Results", desc: "Track record of delivering impactful solutions for 100+ clients." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <SectionHeader badge="Why Us" title="Why Choose AI SmartSyS" description="We combine innovation with reliability to deliver exceptional results." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div key={r.title} className="text-center p-6 rounded-2xl bg-card border border-border shadow-card hover-lift animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
              <r.icon size={28} />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
