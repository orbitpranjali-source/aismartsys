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

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <ProductsSection />
    <WhyChooseUs />
    <OurProcess />
    <PortfolioSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
