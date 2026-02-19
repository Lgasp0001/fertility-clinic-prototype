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
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Flexible Payment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality dental care shouldn't break the bank. We offer financing
            solutions to make your dream smile affordable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Membership Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.98 }}
            className="active-reveal"
          >
            <Card className="h-full border-2 border-teal shadow-lg hover:shadow-xl transition-shadow premium-glass glass-glow shine-effect cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-navy">
                  Frosts Membership
                </CardTitle>
                <CardDescription className="text-lg">
                  Preventive care made simple
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-navy">$20</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      2 comprehensive checkups per year
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      2 professional cleanings per year
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      10% discount on all treatments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Priority appointment booking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Emergency dental support
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="w-full bg-teal hover:bg-teal-600 text-white"
                >
                  Start a Conversation
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* 0% Finance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileTap={{ scale: 0.98 }}
            className="active-reveal focus-within:ring-2 focus-within:ring-gold"
          >
            <Card className="h-full border-2 border-gold shadow-lg hover:shadow-xl transition-shadow premium-glass gold-glass-glow shine-effect cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-navy">
                  0% Finance Available
                </CardTitle>
                <CardDescription className="text-lg">
                  Spread the cost, keep the smile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-navy">$28</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      0% interest for up to 12 months
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Available on treatments over $500
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Quick and easy approval process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Flexible repayment options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Start your treatment immediately
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={onBookingClick}
                  size="lg"
                  className="w-full bg-gold hover:bg-gold-600 text-white"
                >
                  Check Your Options
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
            We also accept most major dental insurance plans. Contact us to
            verify your coverage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
