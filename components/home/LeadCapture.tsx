'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeadCaptureProps {
  onBookingClick: () => void;
}

import { Heart } from 'lucide-react';

export default function LeadCapture({ onBookingClick }: LeadCaptureProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-berry to-berry-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Fertility Conversation
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Tell us about your dreams. We’re here to help you navigate your journey with gentle, personalized care in our boutique Austin studio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="flex items-center space-x-2 text-white/90">
              <Heart className="w-5 h-5 text-rose fill-rose/20" />
              <span className="font-medium">Free Expert Consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Heart className="w-5 h-5 text-rose fill-rose/20" />
              <span className="font-medium">Fertility Financing Plans</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Heart className="w-5 h-5 text-rose fill-rose/20" />
              <span className="font-medium">Discreet Boutique Studio</span>
            </div>
          </div>

          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-rose hover:bg-rose-600 text-white text-lg px-12 py-7 rounded-2xl shadow-xl hover:shadow-[0_20px_40px_rgba(244,184,184,0.3)] transform hover:-translate-y-1 transition-all font-bold"
          >
            Book Your Private Consultation
          </Button>

          <p className="text-sm text-white/50 mt-8">
            Completely confidential. No obligation. Just world-class expertise and care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
