import { PenTool, Globe, Server, MessageSquare, Smartphone, Code, Search, Cloud, Zap } from "lucide-react";
import serviceWebDesigning from "@/assets/images/service-web-designing.png";
import serviceWebDevelopment from "@/assets/images/service-web-development.png";
import serviceDomain from "@/assets/images/service-domain.png";
import serviceSms from "@/assets/images/service-sms.png";
import serviceApp from "@/assets/images/service-app.png";
import serviceSoftware from "@/assets/images/service-software.png";
import serviceSeo from "@/assets/images/service-seo.jpg";
import serviceHosting from "@/assets/images/service-hosting.jpg";

import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthModal from "./AuthModal";

const services = [
  {
    ref: "website-designing",
    icon: PenTool,
    title: "Website Designing",
    desc: "Create visually stunning and user-friendly website designs that captivate your audience.",
    image: serviceWebDesigning
  },
  {
    ref: "website-development",
    icon: Globe,
    title: "Website Development",
    desc: "Build robust, scalable, and responsive websites tailored to your business needs.",
    image: serviceWebDevelopment
  },
  {
    ref: "domain-registration",
    icon: Server,
    title: "Domain Registration",
    desc: "Secure your unique digital identity with quick and easy domain registration services.",
    image: serviceDomain
  },
  {
    ref: "bulk-sms",
    icon: MessageSquare,
    title: "Bulk SMS Services",
    desc: "Reach your audience instantly with reliable and efficient bulk SMS solutions.",
    image: serviceSms
  },
  {
    ref: "app-development",
    icon: Smartphone,
    title: "App Development",
    desc: "Develop high-performance mobile applications for seamless user experiences.",
    image: serviceApp
  },
  {
    ref: "customised-software",
    icon: Code,
    title: "Customised Software Development",
    desc: "Get bespoke software solutions designed to optimize your unique business operations.",
    image: serviceSoftware
  },
  {
    ref: "seo",
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    desc: "Improve your search rankings and drive organic traffic to your website.",
    image: serviceSeo
  },
  {
    ref: "hosting",
    icon: Cloud,
    title: "Hosting",
    desc: "Ensure maximum uptime and performance with our secure web hosting services.",
    image: serviceHosting
  },
];

const ServicesSection = () => {
  const { ref, isVisible, getDelay } = useStaggerReveal(services.length, 80);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleServiceClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background Video */}
      <div className="video-container opacity-20">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-animation-1552-large.mp4" type="video/mp4" />
        </video>
      </div>

      <GlowOrb className="w-[500px] h-[500px] -top-60 -right-60" color="primary" />
      <GlowOrb className="w-[400px] h-[400px] bottom-0 -left-40" color="secondary" />

      {/* Separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Our Services" title="What We Offer" description="Empowering businesses with intelligent solutions across AI, web, and mobile." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              id={s.ref}
              onClick={handleServiceClick}
              className={`group premium-card cursor-pointer transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={getDelay(i)}
            >
              <div className="aspect-video bg-muted/30 relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/10 group-hover:bg-transparent transition-colors duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-gradient-button group-hover:text-secondary-foreground transition-all duration-500">
                    <s.icon size={24} />
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-xs mb-6 leading-relaxed line-clamp-2">{s.desc}</p>
                <div className="flex justify-center items-center text-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <Zap size={12} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => navigate("/dashboard")}
      />
    </section>
  );
};

export default ServicesSection;
