'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Camera } from 'lucide-react';
import Image from 'next/image';

const cases = [
    {
        name: "Sarah's Invisalign Journey",
        image: "/images/transformations/sarah.png",
        location: "South Congress, Austin",
        treatment: "Aligner Orthodontics",
        duration: "11 Months",
        outcome: "Perfect Alignment",
        quote: "I wanted to fix my crowding before my wedding at Laguna Gloria. Dr. Frost made it so easy.",
        rating: 4.5
    },
    {
        name: "David's Smile Makeover",
        image: "/images/transformations/david.png",
        location: "Westlake Hills, Austin",
        treatment: "Composite Bonding",
        duration: "1 Visit",
        outcome: "Gap Closure",
        quote: "I've had a gap between my front teeth for years. It was fixed in 90 minutes. Life-changing.",
        rating: 4.5
    },
    {
        name: "Emily's Brightening",
        image: "/images/transformations/emily.png",
        location: "Downtown Austin",
        treatment: "Boutique Whitening",
        duration: "14 Days",
        outcome: "8 Shades Whiter",
        quote: "The personalized trays were so comfortable. My teeth have never looked this bright.",
        rating: 4.5
    }
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-background overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <Badge className="bg-teal/10 text-teal mb-4 hover:bg-teal/20 transition-colors">
                            Real Austin Smiles
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight text-balance">
                            Authentic Results. <br />
                            <span className="text-teal">The Smiles of Westlake.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            From South Congress to Westlake, we’ve helped thousands of Austinites reclaim their confidence. No stock photos—just real artistry.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-end"
                    >
                        <div className="flex -space-x-4 mb-4">
                            {[
                                { type: 'image', src: '/images/transformations/sarah.png', name: 'Sarah' },
                                { type: 'letter', char: 'M', color: 'bg-orange-500' },
                                { type: 'image', src: '/images/transformations/david.png', name: 'David' },
                                { type: 'letter', char: 'K', color: 'bg-blue-600' },
                                { type: 'image', src: '/images/transformations/emily.png', name: 'Emily' },
                            ].map((avatar, i) => (
                                <div
                                    key={i}
                                    className={`w-12 h-12 rounded-full border-4 border-white overflow-hidden ring-2 ring-teal/20 shadow-lg relative flex items-center justify-center ${avatar.type === 'letter' ? avatar.color : 'bg-gray-200'}`}
                                >
                                    {avatar.type === 'image' && avatar.src ? (
                                        <Image
                                            src={avatar.src}
                                            alt={avatar.name || 'Patient'}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <span className="text-white font-bold text-lg">{'char' in avatar ? avatar.char : ''}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="text-navy font-bold flex items-center gap-2">
                            <div className="flex">
                                {[...Array(4)].map((_, i) => <Star key={i} className="w-4 h-4 text-gold fill-gold" />)}
                                <Star className="w-4 h-4 text-gold" />
                            </div>
                            4.5/5 from 437 reviews in total
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory flex-nowrap flex md:grid px-4 -mx-4">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group cursor-pointer snap-center min-w-[85vw] md:min-w-0"
                        >
                            <Card className="border-none shadow-xl shadow-navy/5 rounded-[2rem] overflow-hidden bg-white/50 backdrop-blur-sm">
                                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                                    <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-navy text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                                        Real Result
                                    </span>
                                </div>
                                <CardContent className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-navy mb-1">{item.name}</h3>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                <Badge variant="outline" className="text-[10px] uppercase tracking-tighter border-teal/30 text-teal">
                                                    {item.treatment}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic mb-6 leading-relaxed">
                                        "{item.quote}"
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Duration</p>
                                            <p className="text-navy font-bold">{item.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Outcome</p>
                                            <p className="text-navy font-bold">{item.outcome}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
