import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "./SectionHeader";
import { GlowOrb } from "./TechPattern";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <GlowOrb className="w-72 h-72 bottom-0 right-0" color="primary" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Contact Us" title="Get In Touch" description="Ready to transform your business with AI? Let's talk." />
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 p-8 md:p-10 glass-card">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Send us a message</h3>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-muted/50 border-border resize-none text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" className="w-full rounded-xl" size="lg">
              <Send size={16} className="mr-2" /> Send Message
            </Button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground text-xl mb-3">Contact Information</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reach out to us for any inquiries about our AI solutions and services. We're here to help you innovate.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+91 70241 28029", href: "tel:+917024128029" },
                { icon: Mail, label: "Email", value: "vijaytiwari@orbitengineerings.com", href: "mailto:vijaytiwari@orbitengineerings.com" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-gradient-button group-hover:text-secondary-foreground transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                    <p className="font-medium text-foreground text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { num: "100+", label: "Clients" },
                { num: "250+", label: "Projects" },
                { num: "99%", label: "Satisfaction" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="font-heading font-bold text-2xl text-gradient-primary">{s.num}</p>
                  <p className="text-muted-foreground text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
