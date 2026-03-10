import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "What AI services does AI SmartSyS offer?", a: "We offer AI development, chatbot building, data analytics, automation solutions, web and mobile app development powered by artificial intelligence." },
  { q: "How long does an AI project typically take?", a: "Project timelines vary based on complexity. A standard AI solution takes 4-12 weeks from discovery to deployment." },
  { q: "Do you offer custom AI solutions?", a: "Yes! Every solution is tailored to your specific business requirements and goals. We don't believe in one-size-fits-all." },
  { q: "What industries do you serve?", a: "We work across e-commerce, healthcare, finance, education, marketing, and more. Our AI solutions adapt to any industry." },
  { q: "How do you ensure data security?", a: "We implement enterprise-grade encryption, secure APIs, and follow industry best practices for data protection and privacy compliance." },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="relative section-padding overflow-hidden">
      {/* Background Video */}
      <div className="video-container opacity-5">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-background-of-a-digital-circuit-board-looping-24709-large.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      <div className="container mx-auto max-w-3xl relative z-10" ref={ref}>
        <SectionHeader badge="FAQ" title="Frequently Asked Questions" description="Find answers to common questions about our AI services." />
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className={`rounded-2xl premium-card px-8 mb-4 border border-white/5 transition-all duration-500 hover:border-accent/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline py-6 text-base group">
                <span className="flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center mr-4 text-xs group-data-[state=open]:bg-accent group-data-[state=open]:text-background transition-colors">
                    0{i + 1}
                  </span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-12">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
