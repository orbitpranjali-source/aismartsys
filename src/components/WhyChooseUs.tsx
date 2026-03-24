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
              className={`group text-center p-8 bg-gradient-nav-pill border border-white/10 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={getDelay(i)}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-lg border border-white/30">
                <r.icon size={28} />
              </div>
              <h3 className="font-heading font-semibold text-white mb-3">{r.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">{r.desc}</p>

              {/* Subtle accent line */}
              <div className="mt-6 mx-auto w-8 h-1 bg-white/20 rounded-full group-hover:w-16 group-hover:bg-white transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
