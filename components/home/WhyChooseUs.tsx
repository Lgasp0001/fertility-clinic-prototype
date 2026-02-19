'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Coffee } from 'lucide-react';

const features = [
    {
        icon: Heart,
        title: 'Compassionate Care',
        description: 'We understand the emotional journey of fertility. Our "Gentle Journey" protocol combines world-class clinical precision with a boutique environment designed for your comfort.',
    },
    {
        icon: Coffee,
        title: 'Boutique, Not Clinical',
        description: 'Enjoy a calming champagne or premium coffee in our Austin studio lounge. We believe your fertility care should feel supportive and private, not cold or clinical.',
    },
    {
        icon: Sparkles,
        title: 'Reproductive Artistry',
        description: 'Precision science meets a gentle touch. Our clinicians are world-leaders in the field, dedicated to your personalized success story.',
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
                    <h2 className="text-4xl md:text-5xl font-bold text-berry mb-6 tracking-tight">
                        Fertility Care, Reimagined for Austin.
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We’ve redesigned the fertility experience, replacing impersonal clinical environments with world-class reproductive artistry, advanced technology, and a warm, patient-first approach.
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
                            className="group active-reveal premium-glass glass-glow shine-effect p-10 rounded-[2rem] cursor-pointer border-white/20 hover:border-rose/30 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-rose/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <feature.icon className="w-8 h-8 text-rose" />
                            </div>
                            <h3 className="text-2xl font-bold text-berry mb-4 tracking-tight">{feature.title}</h3>
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

