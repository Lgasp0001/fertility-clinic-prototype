'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = testimonials.slice(0, 8);
  const currentTestimonial = displayTestimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? displayTestimonials.length - 1 : prev - 1
    );
  };

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 100) {
      prevTestimonial();
    } else if (info.offset.x < -100) {
      nextTestimonial();
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Real Patient Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our delighted patients
            who have transformed their smiles and their lives.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-2xl border-none bg-gray-50/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-teal/10" />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="relative z-10 cursor-grab active:cursor-grabbing"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-gold fill-gold"
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-3xl text-navy text-center mb-8 leading-relaxed font-medium italic">
                  "{currentTestimonial.text}"
                </blockquote>

                <div className="text-center">
                  <p className="font-bold text-navy text-xl mb-1">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-teal font-semibold tracking-wide uppercase text-sm">
                    {currentTestimonial.treatment}
                  </p>
                </div>
              </motion.div>
            </CardContent>

            {/* Navigation Arrows - Hidden on mobile for better UX with swiping */}
            <div className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button
                onClick={prevTestimonial}
                variant="ghost"
                size="icon"
                className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button
                onClick={nextTestimonial}
                variant="ghost"
                size="icon"
                className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-teal w-10'
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
