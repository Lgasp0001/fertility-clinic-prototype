'use client';

import { motion } from 'framer-motion';
import { Check, CreditCard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PricingSectionProps {
  onBookingClick: () => void;
}

export default function PricingSection({ onBookingClick }: PricingSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-berry mb-4">
            Investing in Your Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class fertility care should be accessible. We offer flexible
            financing solutions to make your dream of building a family a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Preservation Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.98 }}
            className="active-reveal"
          >
            <Card className="h-full border-2 border-rose/30 shadow-lg hover:shadow-xl transition-shadow premium-glass glass-glow shine-effect cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-berry">
                  Frosts Preservation
                </CardTitle>
                <CardDescription className="text-lg">
                  Empower your future self
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-berry">$45</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-rose mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Personalized egg freezing roadmap
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-rose mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Comprehensive hormone screening
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-rose mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      1 year of cryopreservation included
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-rose mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Boutique studio recovery suite
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-rose mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Emotional support & counseling
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="w-full bg-rose hover:bg-rose-600 text-white"
                >
                  Start Your Journey
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* IVF Finance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.98 }}
            className="active-reveal"
          >
            <Card className="h-full border-2 border-berry/30 shadow-lg hover:shadow-xl transition-shadow premium-glass berry-glass-glow shine-effect cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-berry rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-berry">
                  IVF Financing
                </CardTitle>
                <CardDescription className="text-lg">
                  Clear paths to parenthood
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-berry">$199</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-berry mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      0% interest for up to 12 months
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-berry mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Packages starting under $10k
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-berry mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Quick and discreet approval
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-berry mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Flexible multi-cycle options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-berry mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Dedicated financial coordinator
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="w-full bg-berry hover:bg-berry-600 text-white"
                >
                  Explore Options
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            We also work with most major health insurance providers for diagnostic procedures. Contact us to
            verify your coverage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
