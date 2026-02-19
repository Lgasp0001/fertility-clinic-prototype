export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I start my fertility journey at Frosts?',
    answer: 'The first step is a comprehensive fertility consultation in our South Congress studio. We’ll discuss your goals, medical history, and conduct initial diagnostics in a comfortable, boutique environment. You can book your first visit directly through our website or by calling our care coordinators.',
    category: 'process'
  },
  {
    id: '2',
    question: 'How much does IVF or egg freezing cost?',
    answer: 'Transparency is key to our care. A standard IVF cycle or egg freezing package has a clear base price, which we will discuss during your consultation. We also offer flexible financing plans through partners like CareCredit and LendingClub, with monthly payments starting as low as $45/mo for certain preservation plans.',
    category: 'cost'
  },
  {
    id: '3',
    question: 'How long does a typical IVF cycle take?',
    answer: 'A standard IVF cycle typically takes about 4 to 6 weeks from the start of medication to the embryo transfer. However, every journey is unique. Our specialists provide a personalized timeline during your consultation so you know exactly what to expect at every stage.',
    category: 'time'
  },
  {
    id: '4',
    question: 'What is the boutique experience at Frosts?',
    answer: 'We’ve designed Frosts to be the opposite of a cold, clinical hospital. Our studio features private recovery suites, organic refreshments, and a team that knows you by name. We combine world-class reproductive technology with a nurturing environment that prioritizes your emotional well-being.',
    category: 'experience'
  },
  {
    id: '5',
    question: 'Do you offer genetic testing for embryos?',
    answer: 'Yes, we provide advanced PGT-A and PGT-M genetic screening. This technology allows us to select the healthiest embryos, which can significantly increase success rates and reduce the risk of chromosomal abnormalities.',
    category: 'tech'
  },
  {
    id: '6',
    question: 'What are your success rates?',
    answer: 'While success rates depend on individual factors like age and medical history, Frosts maintains success rates that are consistently above the national average. We are proud members of ASRM and SART, and we report our outcomes transparently to ensure you have the best information possible.',
    category: 'success'
  },
  {
    id: '7',
    question: 'Do you offer holistic support like acupuncture?',
    answer: 'Absolutely. We believe in total-body health. Our "Frosts Holistic" program integrates acupuncture, nutrition counseling, and stress-reduction techniques specifically designed to support fertility treatments and improve outcomes.',
    category: 'holistic'
  },
  {
    id: '8',
    question: 'Is my privacy protected?',
    answer: 'Your privacy is our highest priority. From our discreet South Congress location to our secure patient portal, every aspect of your care is handled with the utmost confidentiality. We strictly adhere to HIPAA guidelines and beyond.',
    category: 'privacy'
  }
];

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};
