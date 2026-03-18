import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home"><HeroSection /></div>
      <div id="about" className="reveal-on-scroll"><AboutSection /></div>
      <div className="reveal-on-scroll"><ServicesSection /></div>
      <div className="reveal-on-scroll"><ProductsSection /></div>
      <div className="reveal-on-scroll"><WhyChooseUs /></div>
      <div className="reveal-on-scroll"><OurProcess /></div>
      <div className="reveal-on-scroll"><PortfolioSection /></div>
      <div className="reveal-on-scroll"><TestimonialsSection /></div>
      <div className="reveal-on-scroll"><FAQSection /></div>
      <div className="reveal-on-scroll"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Index;
