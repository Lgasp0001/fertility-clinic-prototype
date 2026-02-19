'use client';

import { motion } from 'framer-motion';
import { faqs } from '@/lib/data/faqs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

interface FAQSectionProps {
  onBookingClick: () => void;
}

export default function FAQSection({ onBookingClick }: FAQSectionProps) {
  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Your Questions, Answered
          </h2>
          <p className="text-xl text-gray-600">
            We understand you may have concerns. Here's what our patients commonly ask.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left hover:text-teal">
                  <span className="font-semibold text-navy">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <Button
            onClick={onBookingClick}
            size="lg"
            className="bg-teal hover:bg-teal-600 text-white"
          >
            Start a Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
