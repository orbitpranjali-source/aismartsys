import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";
import { GridDots } from "./TechPattern";
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
    <section id="faq" className="relative section-padding bg-background overflow-hidden">
      <GridDots className="top-0 right-0 text-foreground" />

      <div className="container mx-auto max-w-3xl relative z-10" ref={ref}>
        <SectionHeader badge="FAQ" title="Frequently Asked Questions" description="Find answers to common questions about our AI services." />
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className={`rounded-xl border border-border bg-card px-6 shadow-card transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <AccordionTrigger className="font-heading font-medium text-foreground text-left hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
