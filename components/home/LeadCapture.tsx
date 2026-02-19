'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeadCaptureProps {
  onBookingClick: () => void;
}

export default function LeadCapture({ onBookingClick }: LeadCaptureProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Smile Conversation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Tell us about your goals. We're here to help you navigate your journey to a healthier, more confident smile with our pain-free, personalized approach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="w-5 h-5 text-teal" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="w-5 h-5 text-teal" />
              <span>0% Finance Available</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="w-5 h-5 text-teal" />
              <span>Same-Day Appointments</span>
            </div>
          </div>

          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-teal hover:bg-teal-600 text-white text-lg px-12 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Book My Free Consultation
          </Button>

          <p className="text-sm text-gray-400 mt-6">
            No obligation. No hidden fees. Just honest, expert dental care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
