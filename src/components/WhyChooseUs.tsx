import { Shield, Clock, Users, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade encryption and security protocols protect your data." },
  { icon: Clock, title: "Fast Delivery", desc: "Agile development ensures rapid, on-time project completion." },
  { icon: Users, title: "Expert Team", desc: "Seasoned AI engineers and developers with deep domain expertise." },
  { icon: Award, title: "Proven Results", desc: "Track record of delivering impactful solutions for 100+ clients." },
];

const WhyChooseUs = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(reasons.length, 100);

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Video */}
      <div className="video-container opacity-10">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-elements-moving-slowly-24707-large.mp4" type="video/mp4" />
        </video>
      </div>

      <GlowOrb className="w-[400px] h-[400px] top-1/2 -left-40" color="secondary" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Why Us" title="Why Choose AI SmartSyS" description="We combine innovation with reliability to deliver exceptional results." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group text-center p-8 premium-card transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={getDelay(i)}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-500 shadow-sm border border-secondary/10">
                <r.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>

              {/* Subtle accent line */}
              <div className="mt-6 mx-auto w-8 h-1 bg-secondary/20 rounded-full group-hover:w-16 group-hover:bg-secondary transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
