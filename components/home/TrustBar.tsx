'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Star, Users } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Shield,
      text: 'ASRM Member',
    },
    {
      icon: Award,
      text: 'TFS Certified',
    },
    {
      icon: Star,
      text: '4.9/5 GCR Rating',
    },
    {
      icon: Users,
      text: '20+ Years Experience',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-3 bg-rose-50 rounded-full flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <item.icon className="w-8 h-8 text-rose group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-sm font-semibold text-berry">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
