'use client';

import { motion } from 'framer-motion';
import { Heart, Laptop, ShieldCheck, Coffee } from 'lucide-react';

const features = [
    {
        icon: Heart,
        title: 'Anxiety? We Get It.',
        description: 'Over 40% of our patients were nervous before they met Dr. Frost. Our "Calm Clinic" protocol uses gentle tech and a boutique vibe to make dental fear a thing of the past.',
    },
    {
        icon: Coffee,
        title: 'Boutique, Not Clinical',
        description: 'Enjoy a premium coffee in our Austin studio lounge before your appointment. We believe your dental visit should feel more like a spa day than a medical chore.',
    },
    {
        icon: ShieldCheck,
        title: 'The Austin Guarantee',
        description: 'Transparent pricing with 0% Westlake financing. No hidden fees, no medical jargon—just clear paths to the smile you deserve.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
                        Dentistry, Reimagined for Austin.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We’ve redesigned the dental experience, replacing impersonal clinical environments with world-class dental artistry, advanced technology, and a warm, patient-first approach.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileTap={{ scale: 0.98 }}
                            className="group active-reveal premium-glass glass-glow shine-effect p-10 rounded-[2rem] cursor-pointer border-white/20 hover:border-teal/30 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <feature.icon className="w-8 h-8 text-teal" />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

