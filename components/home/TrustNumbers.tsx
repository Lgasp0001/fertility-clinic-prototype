'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function TrustNumbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 850, suffix: '+', label: 'Families Started' },
    { number: 4.9, suffix: '/5', label: 'Star Rating', decimal: true },
    { number: 20, suffix: '+', label: 'Years Experience' },
    { number: 45, suffix: '/mo', label: 'Finance from', prefix: '$' },
  ];

  return (
    <section className="py-16 bg-berry text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-rose mb-2">
                {stat.prefix}
                <AnimatedNumber
                  value={stat.number}
                  decimal={stat.decimal}
                  isInView={isInView}
                />
                {stat.suffix}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  decimal,
  isInView,
}: {
  value: number;
  decimal?: boolean;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return <>{decimal ? count.toFixed(1) : Math.floor(count)}</>;
}
