import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send, Phone, User, Mail, Briefcase } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  title?: string;
  description?: string;
}

const services = [
  "Website Designing",
  "Website Development",
  "Domain Registration",
  "Bulk SMS Services",
  "App Development",
  "Customised Software Development",
  "Search Engine Optimisation (SEO)",
  "Hosting",
  "Other"
];

const InquiryModal: React.FC<InquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultService = "Website Development",
  title = "Inquiry Form",
  description = "Fill out the form below and we'll get back to you as soon as possible."
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        setForm({
          name: "",
          email: "",
          phone: "",
          service: defaultService,
          message: ""
        });
        onClose();
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] glass border-white/10 bg-background/90 backdrop-blur-2xl p-0 overflow-hidden rounded-3xl animate-in fade-in zoom-in duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary" />
        
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-heading font-bold text-foreground mb-2">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {description}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-muted/30 border-white/5 h-12 pl-12 rounded-2xl focus:border-primary/50 text-foreground"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="bg-muted/30 border-white/5 h-12 pl-12 rounded-2xl focus:border-primary/50 text-foreground"
              />
            </div>

            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="bg-muted/30 border-white/5 h-12 pl-12 rounded-2xl focus:border-primary/50 text-foreground"
              />
            </div>

            <div className="relative group">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors z-10" size={18} />
              <Select 
                value={form.service} 
                onValueChange={(val) => setForm({ ...form, service: val })}
              >
                <SelectTrigger className="bg-muted/30 border-white/5 h-12 pl-12 rounded-2xl focus:border-primary/50 text-foreground">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="glass border-white/10 rounded-2xl">
                  {services.map((s) => (
                    <SelectItem key={s} value={s} className="rounded-xl focus:bg-primary/20 cursor-pointer">
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Textarea
              placeholder="Your Message / Requirement"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="bg-muted/30 border-white/5 text-foreground placeholder:text-muted-foreground rounded-2xl focus:border-primary/50 transition-colors resize-none"
            />

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-12 text-base font-semibold bg-gradient-button hover:opacity-90 rounded-2xl shadow-lg shadow-primary/20 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send size={18} /> Submit Request
                </div>
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
