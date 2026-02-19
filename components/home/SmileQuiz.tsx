'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, ArrowLeft, Heart, Sparkles, Smile, ShieldCheck } from 'lucide-react';

const steps = [
    {
        id: 'concern',
        title: "What's your main concern?",
        questions: [
            { id: 'gaps', label: 'Gaps between teeth', icon: <div className="flex gap-3 items-center"><div className="w-4 h-6 bg-teal/20 border-2 border-teal rounded-t-[6px] rounded-b-[4px] relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1/3 bg-white/20" /></div><div className="w-4 h-6 bg-teal/20 border-2 border-teal rounded-t-[6px] rounded-b-[4px] relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1/3 bg-white/20" /></div></div> },
            { id: 'crooked', label: 'Crooked or crowded', icon: <Smile className="w-6 h-6" /> },
            { id: 'color', label: 'Discoloration/Stains', icon: <Sparkles className="w-6 h-6" /> },
            { id: 'missing', label: 'Missing teeth', icon: <ShieldCheck className="w-6 h-6" /> },
        ]
    },
    {
        id: 'outcome',
        title: "What's your dream outcome?",
        questions: [
            { id: 'natural', label: 'Healthy & Natural', icon: <Heart className="w-6 h-6" /> },
            { id: 'perfect', label: 'Perfect "Hollywood" Smile', icon: <div className="text-xl font-bold">✨</div> },
            { id: 'function', label: 'Better chewing/Function', icon: <div className="text-xl">🦷</div> },
            { id: 'pain', label: 'Stop dental pain', icon: <ShieldCheck className="w-6 h-6" /> },
        ]
    },
    {
        id: 'timeline',
        title: "When would you like to start?",
        questions: [
            { id: 'asap', label: 'As soon as possible', icon: <div className="text-sm font-bold italic">FAST</div> },
            { id: 'soon', label: 'Within 3 months', icon: <div className="text-sm font-bold">Soon</div> },
            { id: 'research', label: 'Just researching', icon: <div className="text-sm font-bold">Info</div> },
            { id: 'flexible', label: 'Flexible / Next year', icon: <div className="text-sm font-bold">Later</div> },
        ]
    }
];

export default function SmileQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isFinished, setIsFinished] = useState(false);

    const [email, setEmail] = useState('');
    const isEmailValid = email.includes('@');

    const handleAnswer = (questionId: string) => {
        setAnswers({ ...answers, [steps[currentStep].id]: questionId });
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <section id="quiz" className="py-24 bg-navy relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {!isFinished ? (
                    <>
                        <Badge className="bg-teal/10 text-teal mb-6">30-Second Assessment</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                            Start Your <span className="text-teal">Smile Journey.</span>
                        </h2>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-3xl">
                            {/* Progress Bar */}
                            <div className="w-full h-1 bg-white/10 rounded-full mb-12 overflow-hidden">
                                <motion.div
                                    className="h-full bg-teal"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 font-bold">Step {currentStep + 1} of {steps.length}</p>
                                    <h3 className="text-3xl font-bold text-white mb-10">{steps[currentStep].title}</h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {steps[currentStep].questions.map((q) => (
                                            <button
                                                key={q.id}
                                                onClick={() => handleAnswer(q.id)}
                                                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                                            >
                                                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-4 text-teal group-hover:scale-110 transition-transform">
                                                    {q.icon}
                                                </div>
                                                <span className="text-white font-medium">{q.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {currentStep > 0 && (
                                <button
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="mt-12 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm mx-auto"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Oops, go back</span>
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl text-center"
                    >
                        <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mb-8 mx-auto">
                            <Check className="w-10 h-10 text-teal font-bold" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">Assessment Complete!</h3>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto">
                            Based on your answers, you’re a great candidate for our <span className="text-navy font-bold">Boutique Smile Program.</span> Give us your email to see your recommended next steps.
                        </p>

                        <div className="max-w-sm mx-auto flex flex-col gap-4">
                            <div className="text-left">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className={`w-full px-6 py-4 rounded-xl border focus:outline-none transition-colors text-lg ${!isEmailValid && email !== ''
                                        ? 'border-red-500 ring-red-100'
                                        : 'border-gray-200 focus:ring-2 focus:ring-teal/30'
                                        }`}
                                />
                                {!isEmailValid && email !== '' && (
                                    <p className="text-red-500 text-xs mt-1 ml-1">Please include an '@' in the email address.</p>
                                )}
                            </div>
                            <Button
                                size="lg"
                                className={`text-lg py-7 rounded-xl transition-all duration-300 ${isEmailValid
                                    ? 'bg-navy hover:bg-navy-700 text-white shadow-xl shadow-navy/20 scale-[1.02]'
                                    : 'bg-navy/40 cursor-not-allowed text-white/80'
                                    }`}
                            >
                                See My Results
                            </Button>
                        </div>
                        <p className="mt-8 text-sm text-gray-400 flex items-center justify-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Your data is secured and private.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
