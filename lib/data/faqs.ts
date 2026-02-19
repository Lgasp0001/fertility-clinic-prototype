export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Will my dental treatment hurt?',
    answer: 'We prioritize your comfort above all else. We use "The Wand" - a computer-controlled anesthesia system that delivers numbing medication so gently, most patients don\'t even feel the injection. For anxious patients, we also offer optional sedation dentistry. The vast majority of our patients describe their experience as completely pain-free and far better than they expected.',
    category: 'pain'
  },
  {
    id: '2',
    question: 'How much will my treatment cost?',
    answer: 'We believe everyone deserves a confident smile, which is why we offer flexible payment options to fit any budget. We provide 0% interest financing for up to 12 months on treatments over $500. For example, you can begin your Invisalign journey for as little as $28 per month. We\'ll provide a detailed cost breakdown during your free consultation, with no hidden fees or surprises.',
    category: 'cost'
  },
  {
    id: '3',
    question: 'How many appointments will I need?',
    answer: 'It depends on your treatment, but we maximize efficiency wherever possible. Many procedures like composite bonding and teeth whitening can be completed in a single visit. For treatments requiring multiple appointments, we offer extended hours including late evenings and Saturdays to accommodate your schedule. We also provide remote monitoring for aligner treatments to minimize in-office visits.',
    category: 'time'
  },
  {
    id: '4',
    question: 'What if I\'m not happy with the results?',
    answer: 'Your satisfaction is our guarantee. We use Digital Smile Design technology so you can preview your results before we ever begin treatment. For teeth whitening, we offer our Frosts Promise: if you\'re not thrilled with your results within 14 days, we\'ll provide a complimentary clinical top-up treatment at no charge. We stand behind the quality of our work 100%.',
    category: 'guarantee'
  },
  {
    id: '5',
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we work with most major dental insurance providers and will help you maximize your benefits. Our team will verify your coverage before treatment and handle all the paperwork on your behalf. For treatments not covered by insurance, we offer our Frosts Membership plan at just $20/month, which includes 2 checkups, 2 cleanings per year, and 10% off all additional treatments.',
    category: 'insurance'
  },
  {
    id: '6',
    question: 'How long will my results last?',
    answer: 'With proper care, most of our treatments deliver long-lasting or even permanent results. Dental implants can last a lifetime, porcelain veneers typically last 10-15 years, and teeth whitening results last 1-3 years depending on your habits. We provide detailed aftercare instructions and maintenance plans to help you protect your investment and enjoy your beautiful smile for years to come.',
    category: 'longevity'
  },
  {
    id: '7',
    question: 'I haven\'t been to the dentist in years. Will you judge me?',
    answer: 'Absolutely not. We understand that dental anxiety and life circumstances can prevent people from seeking care. Our compassionate team creates a judgment-free environment where you\'ll feel welcomed and supported, no matter how long it\'s been. We\'ll work with you to develop a comfortable treatment plan at your own pace, focusing on your immediate concerns and long-term oral health goals.',
    category: 'anxiety'
  },
  {
    id: '8',
    question: 'Can I see what my smile will look like before committing?',
    answer: 'Yes! We use advanced Digital Smile Design technology that creates a 3D preview of your results before treatment begins. For orthodontics, you\'ll see your predicted outcome at every stage of treatment. This ensures you\'re completely confident in your treatment plan and excited about your transformation. No surprises - only beautiful, predictable results.',
    category: 'visualization'
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};
