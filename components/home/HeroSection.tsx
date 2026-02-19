'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, MapPin, Star } from 'lucide-react';

import Magnetic from '@/components/ui/Magnetic';

interface HeroSectionProps {
  onBookingClick: () => void;
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const scrollToTreatments = () => {
    const element = document.querySelector('#treatments');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleWords = "Frosts Fertility Clinic".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Header Contrast Strip */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-white/90 backdrop-blur-md z-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <span className="flex">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-rose fill-rose" />
              ))}
              <div className="relative">
                <Star className="w-4 h-4 text-rose" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                  <Star className="w-4 h-4 text-rose fill-rose" />
                </div>
              </div>
            </span>
            <span className="text-white text-sm font-medium tracking-wide uppercase">
              One of Austin&apos;s most compassionate Fertility Experiences
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 leading-[1.1] tracking-tighter text-balance flex flex-wrap justify-center gap-x-[0.2em]"
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                transition={{
                  delay: i * 0.1,
                  duration: 0.8,
                }}
                className={word === "Clinic" ? "text-rose" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            Escape the clinical cold. Experience world-class care and gentle precision in our boutique South Congress studio, designed for your ultimate comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Magnetic>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="bg-rose hover:bg-rose-600 text-white text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-rose/20 transition-all font-semibold"
                >
                  Start Your Journey
                </Button>
              </motion.div>
            </Magnetic>
            <Magnetic>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToTreatments}
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-xl transition-all"
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col items-center"
          >
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4 text-rose" />
              <p className="text-sm font-medium tracking-wide uppercase">Downtown Austin &amp; Westlake Studios • Compassionate Consultation</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToTreatments}
        initial={{ opacity: 0, x: '-50%' }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        className="absolute bottom-10 left-1/2 text-white/50 hover:text-white transition-colors"
        style={{ x: '-50%' }}
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
}
