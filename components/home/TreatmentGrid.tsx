'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Activity,
  Smile,
  Sparkles,
  Sun,
  Shield,
  Award,
  Link as LinkIcon,
  Heart
} from 'lucide-react';
import { treatments } from '@/lib/data/treatments';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const iconMap: { [key: string]: any } = {
  Activity,
  Smile,
  Sparkles,
  Sun,
  Shield,
  Award,
  Link: LinkIcon,
  Heart,
};

export default function TreatmentGrid() {
  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Treatments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine care to complete smile transformations, we offer
            comprehensive dental solutions tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => {
            const Icon = iconMap[treatment.icon];
            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="active-reveal"
              >
                <Card className="h-full premium-glass shine-effect glass-glow border-white/20 hover:shadow-glass-hover transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-teal to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-navy">
                      {treatment.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {treatment.shortDescription}
                    </CardDescription>
                    <div className="mt-4 flex items-baseline justify-between">
                      <span className="text-sm text-gray-500">From</span>
                      <span className="text-lg font-bold text-teal">
                        {treatment.priceStarting}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/treatments/${treatment.slug}`} className="w-full">
                      <Button
                        variant="ghost"
                        className="w-full border border-teal text-teal hover:bg-teal hover:text-white transition-colors"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Not sure which treatment is right for you?
          </p>
          <Link href="#quiz">
            <Button
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white"
            >
              Take Our Smile Assessment
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
