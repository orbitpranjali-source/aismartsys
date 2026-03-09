import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";

const faqs = [
  { q: "What AI services does AI SmartSyS offer?", a: "We offer AI development, chatbot building, data analytics, automation solutions, web and mobile app development powered by artificial intelligence." },
  { q: "How long does an AI project typically take?", a: "Project timelines vary based on complexity. A standard AI solution takes 4-12 weeks from discovery to deployment." },
  { q: "Do you offer custom AI solutions?", a: "Yes! Every solution is tailored to your specific business requirements and goals. We don't believe in one-size-fits-all." },
  { q: "What industries do you serve?", a: "We work across e-commerce, healthcare, finance, education, marketing, and more. Our AI solutions adapt to any industry." },
  { q: "How do you ensure data security?", a: "We implement enterprise-grade encryption, secure APIs, and follow industry best practices for data protection and privacy compliance." },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-background">
    <div className="container mx-auto max-w-3xl">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" description="Find answers to common questions about our AI services." />
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6 shadow-card">
            <AccordionTrigger className="font-heading font-medium text-foreground text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
