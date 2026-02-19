'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import MobileStickyCTA from '@/components/layout/MobileStickyCTA';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TreatmentGrid from '@/components/home/TreatmentGrid';
import SocialProof from '@/components/home/SocialProof';
import PatientTransformations from '@/components/home/PatientTransformations';
import TrustNumbers from '@/components/home/TrustNumbers';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import PricingSection from '@/components/home/PricingSection';
import FAQSection from '@/components/home/FAQSection';
import AssessmentQuiz from '@/components/home/SmileQuiz';
import LeadCapture from '@/components/home/LeadCapture';
import BookingModal from '@/components/modals/BookingModal';

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />
      <main className="min-h-screen">
        <HeroSection onBookingClick={() => setIsBookingModalOpen(true)} />
        <TrustBar />
        <WhyChooseUs />
        <TreatmentGrid />
        <SocialProof />
        <PatientTransformations />
        <TrustNumbers />
        <TestimonialCarousel />
        <PricingSection onBookingClick={() => setIsBookingModalOpen(true)} />
        <FAQSection onBookingClick={() => setIsBookingModalOpen(true)} />
        <AssessmentQuiz />
        <LeadCapture onBookingClick={() => setIsBookingModalOpen(true)} />
      </main>
      <Footer />
      <BackToTop />
      <MobileStickyCTA onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
