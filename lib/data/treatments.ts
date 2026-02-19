export interface Treatment {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  priceRange: string;
  priceStarting: string;
  duration: string;
  recovery: string;
  howItWorks: string[];
}

export const treatments: Treatment[] = [
  {
    id: '1',
    name: 'Fertility Consultations',
    slug: 'fertility-consultations',
    icon: 'Activity',
    shortDescription: 'Compassionate guidance to understand your reproductive health and start your journey.',
    fullDescription: 'Our fertility consultations provide a comprehensive overview of your reproductive health. From initial assessments and hormone testing to personalized treatment plans, we offer a supportive environment to discuss your goals and options. Whether you are just starting or looking for advanced solutions, we are here to guide you every step of the way.',
    benefits: [
      'Personalized reproductive health assessment',
      'One-on-one time with fertility specialists',
      'Comprehensive hormone & diagnostic testing',
      'Clear roadmap for your family-building journey',
      'Supportive and empathetic clinical team',
      'Convenient Austin & Westlake locations'
    ],
    priceRange: '$150 - $350',
    priceStarting: '$150',
    duration: '45-60 minutes',
    recovery: 'None - return to normal activities immediately',
    howItWorks: [
      'Initial health history review',
      'Diagnostic testing and ultrasound (if needed)',
      'Discussion of family-building goals',
      'Review of results and potential pathways',
      'Personalized treatment plan development'
    ]
  },
  {
    id: '2',
    name: 'In Vitro Fertilization (IVF)',
    slug: 'ivf',
    icon: 'Heart',
    shortDescription: 'Advanced reproductive technology to help you conceive and build your family.',
    fullDescription: 'IVF is a highly effective fertility treatment that involves combining eggs and sperm in a specialized laboratory setting. Our state-of-the-art IVF program combines medical precision with compassionate care to optimize your chances of success. From ovarian stimulation to embryo transfer, we provide expert monitoring and support throughout the entire process.',
    benefits: [
      'Highest success rates for many fertility challenges',
      'Advanced laboratory technology & techniques',
      'Personalized stimulation protocols',
      'Option for genetic screening (PGT)',
      'Expert embryology and clinical teams',
      'Compassionate support programs'
    ],
    priceRange: '$12,000 - $18,000',
    priceStarting: '$199/month with financing options',
    duration: '4-6 weeks per cycle',
    recovery: '1-2 days after egg retrieval',
    howItWorks: [
      'Ovarian stimulation and monitoring',
      'Ultrasound-guided egg retrieval',
      'Fertilization in our specialized lab',
      'Embryo development and monitoring',
      'Embryo transfer to the uterus',
      'Pregnancy testing and follow-up'
    ]
  },
  {
    id: '3',
    name: 'Egg Freezing',
    slug: 'egg-freezing',
    icon: 'Sparkles',
    shortDescription: 'Preserve your future options with advanced cryopreservation technology.',
    fullDescription: 'Egg freezing, or oocyte cryopreservation, allows you to preserve your fertility for the future. Whether for personal, medical, or professional reasons, freezing your eggs at their current quality can provide peace of mind and flexibility. Our boutique program focuses on your comfort and provides the highest standards of care in egg harvesting and storage.',
    benefits: [
      'Preserve younger, healthier eggs',
      'Greater flexibility in family planning',
      'Advanced vitrification (flash-freezing) technology',
      'Peace of mind for future fertility',
      'Short, manageable treatment cycle',
      'Long-term secure storage options'
    ],
    priceRange: '$6,000 - $10,000',
    priceStarting: '$6,000',
    duration: '10-14 days for stimulation',
    recovery: '1-2 days after retrieval',
    howItWorks: [
      'Initial consultation and fertility check',
      'Hormonal stimulation of the ovaries',
      'Monitoring with blood tests and ultrasounds',
      'Egg retrieval procedure under light sedation',
      'Immediate vitrification and secure storage'
    ]
  },
  {
    id: '4',
    name: 'Diagnostic Testing',
    slug: 'diagnostic-testing',
    icon: 'Sun',
    shortDescription: 'Comprehensive insights into your fertility health with precise diagnostics.',
    fullDescription: 'Understanding the "why" is the first step toward the "how." Our diagnostic testing services include semen analysis, ovarian reserve testing (AMH), tubal patency assessments (HSG), and carrier screening. We use the latest diagnostic technology to provide accurate and timely results, giving you the clarity you need to make informed decisions about your fertility journey.',
    benefits: [
      'Clarity on potential fertility challenges',
      'Testing for both partners available',
      'Faster path to effective treatment',
      'Accurate, laboratory-verified results',
      'Minimally invasive diagnostic procedures',
      'Detailed review meeting with a specialist'
    ],
    priceRange: '$200 - $800',
    priceStarting: '$200',
    duration: 'Varies by test (30-60 minutes)',
    recovery: 'Minimal - most tests require no downtime',
    howItWorks: [
      'Scheduling of appropriate diagnostic tests',
      'Sample collection or imaging procedure',
      'Expert laboratory analysis',
      'Results review and interpretation',
      'Updated treatment recommendations'
    ]
  },
  {
    id: '5',
    name: 'Sperm Health & Donation',
    slug: 'sperm-health-donation',
    icon: 'Shield',
    shortDescription: 'Specialized services for male fertility and donor sperm integration.',
    fullDescription: 'We offer comprehensive male fertility services, including advanced semen analysis, sperm DNA fragmentation testing, and coordination with reputable sperm banks. Whether you are optimizing your own sperm health or utilizing donor sperm to build your family, our team provides the expertise and discretion you deserve.',
    benefits: [
      'In-depth analysis of male fertility factors',
      'Expert coordination with top donor banks',
      'Discreet and professional environment',
      'Advanced sperm selection techniques',
      'Guidance for LGBTQ+ families & single parents',
      'Integrated care for both partners'
    ],
    priceRange: '$150 - $1,500',
    priceStarting: '$150',
    duration: '30-45 minutes for analysis',
    recovery: 'None',
    howItWorks: [
      'Consultation and service selection',
      'Semen analysis or donor bank selection',
      'Pre-treatment optimization (if needed)',
      'Sperm preparation for IUI or IVF',
      'Secure handling and tracking'
    ]
  },
  {
    id: '6',
    name: 'Genetic Screening',
    slug: 'genetic-screening',
    icon: 'Award',
    shortDescription: 'Ensuring the healthiest start with advanced embryo and carrier testing.',
    fullDescription: 'Our genetic screening services provide peace of mind by identifying potential genetic conditions before or during pregnancy. We offer Preimplantation Genetic Testing (PGT) for embryos during the IVF process, as well as comprehensive carrier screening for parents. These advanced technologies help ensure the healthiest possible start for your future child.',
    benefits: [
      'Reduce the risk of genetic conditions',
      'Increase IVF success rates',
      'Lower the chance of miscarriage',
      'Informed decision-making for parents',
      'Highest accuracy screening technology',
      'Personalized genetic counseling included'
    ],
    priceRange: '$1,500 - $5,000',
    priceStarting: '$1,500',
    duration: 'Varies (1-2 weeks for lab results)',
    recovery: 'None for parents; biopsy occurs in lab',
    howItWorks: [
      'Initial genetic counseling session',
      'Sample collection (blood/saliva) for parents',
      'Optional embryo biopsy during IVF cycle',
      'Advanced chromosomal/genetic analysis',
      'Review of results with clinical team'
    ]
  },
  {
    id: '7',
    name: 'IUI (Intrauterine Insemination)',
    slug: 'iui',
    icon: 'Link',
    shortDescription: 'A gentle, effective first step for many on their fertility journey.',
    fullDescription: 'IUI is a less invasive fertility treatment that involves placing prepared sperm directly into the uterus during ovulation. Often referred to as artificial insemination, it is a recommended first step for many couples and individuals. Our team provides precise cycle monitoring and timing to optimize the success of each IUI procedure.',
    benefits: [
      'Less invasive than IVF',
      'More affordable fertility option',
      'Natural cycle or medicated options',
      'Relatively quick procedure',
      'Minimal downtime or side effects',
      'Excellent first-step treatment'
    ],
    priceRange: '$800 - $2,500',
    priceStarting: '$800',
    duration: '15-20 minutes for procedure',
    recovery: 'None - immediate return to activity',
    howItWorks: [
      'Cycle monitoring with ultrasounds',
      'Identification of peak fertility/ovulation',
      'Sperm preparation and "washing"',
      'Simple intrauterine insemination procedure',
      'Follow-up and support'
    ]
  },
  {
    id: '8',
    name: 'Wellness & Support',
    slug: 'wellness-support',
    icon: 'Heart',
    shortDescription: 'Holistic care for your mind and body throughout your treatment.',
    fullDescription: 'We believe that fertility care should address the whole person. Our wellness and support services include fertility acupuncture, nutritional counseling, and specialized therapy. We provide the emotional and physical support necessary to navigate the complexities of fertility treatment with resilience and hope.',
    benefits: [
      'Reduced stress and anxiety',
      'Optimized physical health for conception',
      'Specialized fertility acupuncture',
      'Professional emotional support',
      'Holistic approach to family building',
      'Support groups and community'
    ],
    priceRange: '$100 - $300 per session',
    priceStarting: '$100',
    duration: '45-60 minutes',
    recovery: 'None - relaxing and restorative',
    howItWorks: [
      'Initial wellness assessment',
      'Individualized support plan',
      'Scheduling of acupuncture or counseling',
      'Ongoing integration with medical treatment',
      'Continued support after success'
    ]
  }
];

export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find(treatment => treatment.slug === slug);
};
