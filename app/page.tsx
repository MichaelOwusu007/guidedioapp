import Navbar from '@/components/HomePage/Navbar';
import Hero from '@/components/HomePage/Hero';
import ChallengesSolutions from '@/components/HomePage/ChallengesSolutions';
import Features from '@/components/HomePage/Features';
import AboutUs from '@/components/HomePage/AboutUs';
import Testimonials from '@/components/HomePage/Testimonials';
import CTASection from '@/components/HomePage/CTASection';
import LandingFooter from '@/components/HomePage/Footer';

const Index = () => (
  <div className="min-h-screen overflow-hidden bg-background">
    <Navbar />
    <Hero />
    <ChallengesSolutions />
    <Features />
    <AboutUs />
    <Testimonials />
    <CTASection />
    <LandingFooter />
  </div>
);

export default Index;
