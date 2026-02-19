'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Calendar, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import MobileStickyCTA from '@/components/layout/MobileStickyCTA';
import BookingModal from '@/components/modals/BookingModal';
import { getTreatmentBySlug } from '@/lib/data/treatments';
import { getTestimonialsByTreatment } from '@/lib/data/testimonials';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function TreatmentPage() {
  const params = useParams();
  const router = useRouter();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const treatment = getTreatmentBySlug(params.slug as string);
  const testimonials = treatment
    ? getTestimonialsByTreatment(treatment.name)
    : [];

  if (!treatment) {
    return (
      <>
        <Header onBookingClick={() => setIsBookingModalOpen(true)} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-berry mb-4">
              Service Not Found
            </h1>
            <Button onClick={() => router.push('/')} className="bg-berry hover:bg-berry/90 text-white">Return Home</Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {treatment.name}
              </h1>
              <p className="text-2xl text-gray-200 mb-8">
                {treatment.shortDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  size="lg"
                  className="bg-rose hover:bg-rose-600 text-white border-none shadow-xl shadow-rose/20"
                >
                  Book My Private Consultation
                </Button>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                  <div className="text-sm text-gray-300">Starting from</div>
                  <div className="text-2xl font-bold text-white">
                    {treatment.priceStarting}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Details */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-berry mb-6 tracking-tight">
                About This Service
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {treatment.fullDescription}
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                <Card className="border-rose/10 bg-rose/5">
                  <CardContent className="p-6">
                    <Clock className="w-8 h-8 text-rose mb-3" />
                    <div className="font-semibold text-berry mb-1 uppercase text-xs tracking-widest">Duration</div>
                    <div className="text-gray-600">{treatment.duration}</div>
                  </CardContent>
                </Card>
                <Card className="border-rose/10 bg-rose/5">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-rose mb-3" />
                    <div className="font-semibold text-berry mb-1 uppercase text-xs tracking-widest">Journey</div>
                    <div className="text-gray-600">{treatment.recovery}</div>
                  </CardContent>
                </Card>
                <Card className="border-rose/10 bg-rose/5">
                  <CardContent className="p-6">
                    <Calendar className="w-8 h-8 text-rose mb-3" />
                    <div className="font-semibold text-berry mb-1 uppercase text-xs tracking-widest">Fees</div>
                    <div className="text-gray-600">{treatment.priceRange}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Benefits */}
              <h2 className="text-3xl font-bold text-berry mb-6">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {treatment.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-6 h-6 text-rose flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* How It Works */}
              <h2 className="text-3xl font-bold text-berry mb-6">
                Your Care Pathway
              </h2>
              <div className="space-y-4 mb-12">
                {treatment.howItWorks.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-berry rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-berry mb-8 text-center tracking-tight">
                Authentic Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-rose/10">
                      <CardContent className="p-6">
                        <Quote className="w-8 h-8 text-rose/10 mb-4" />
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-rose fill-rose"
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 italic">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                        <p className="font-semibold text-berry">
                          {testimonial.name}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-berry">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 tracking-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your private consultation and take the first step towards
                your dream family.
              </p>
              <Button
                onClick={() => setIsBookingModalOpen(true)}
                size="lg"
                className="bg-rose hover:bg-rose-600 text-white border-none shadow-xl shadow-rose/20"
              >
                Book My Free Consultation
              </Button>
              <p className="text-sm text-gray-400 mt-4">
                Specialized financing available • Private boutique studio • Dedicated care team
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <MobileStickyCTA onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultTreatment={treatment.slug}
      />
    </>
  );
}
