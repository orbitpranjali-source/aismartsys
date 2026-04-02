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
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjgpegby", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success("Thank you! Your request has been submitted successfully.");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background Video */}
      <div className="video-container opacity-20">
        <video autoPlay muted loop playsInline>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-data-visualization-concept-animation-24706-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
      <GlowOrb className="w-[400px] h-[400px] bottom-0 -right-40" color="primary" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <SectionHeader badge="Contact Us" title="Get In Touch" description="Ready to transform your business with AI? Let's talk." />
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 p-8 md:p-10 premium-card">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Send us a message</h3>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-muted/30 border-border/50 h-12 text-foreground placeholder:text-muted-foreground rounded-xl focus:border-primary/40 transition-colors"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-muted/30 border-border/50 h-12 text-foreground placeholder:text-muted-foreground rounded-xl focus:border-primary/40 transition-colors"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-muted/30 border-border/50 h-12 text-foreground placeholder:text-muted-foreground rounded-xl focus:border-primary/40 transition-colors"
            />
            <Input
              placeholder="Service / Requirement"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
              className="bg-muted/30 border-border/50 h-12 text-foreground placeholder:text-muted-foreground rounded-xl focus:border-primary/40 transition-colors"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-muted/30 border-border/50 resize-none text-foreground placeholder:text-muted-foreground rounded-xl focus:border-primary/40 transition-colors"
            />
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl disabled:opacity-50" size="lg">
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" /> Send Message
                </>
              )}
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
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-gradient-button group-hover:text-secondary-foreground transition-all duration-500">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{label}</p>
                    <p className="font-medium text-foreground text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              {[
                { num: "100+", label: "Clients" },
                { num: "250+", label: "Projects" },
                { num: "99%", label: "Satisfaction" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <p className="font-heading font-bold text-2xl text-gradient-primary">{s.num}</p>
                  <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
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
