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
    name: 'Routine Dentistry',
    slug: 'routine-dentistry',
    icon: 'Activity',
    shortDescription: 'Gentle care to keep your natural smile healthy, bright, and pain-free.',
    fullDescription: 'Our routine dentistry services encompass everything you need to maintain optimal oral health. From regular checkups and professional cleanings to fillings, root canals, and extractions, we provide comprehensive care in a comfortable, stress-free environment. Prevention is at the heart of what we do, ensuring your smile stays healthy for life.',
    benefits: [
      'Prevent dental problems before they start',
      'Early detection of cavities and gum disease',
      'Professional cleaning removes plaque and tartar',
      'Maintain fresh breath and bright smile',
      'Personalized oral health advice',
      'Pain-free treatments with modern anesthesia'
    ],
    priceRange: '$50 - $150',
    priceStarting: '$50',
    duration: '30-60 minutes',
    recovery: 'None - return to normal activities immediately',
    howItWorks: [
      'Comprehensive oral examination and digital x-rays',
      'Professional cleaning and polish',
      'Treatment of any cavities or issues discovered',
      'Preventive care advice and hygiene tips',
      'Schedule your next checkup for optimal health'
    ]
  },
  {
    id: '2',
    name: 'Aligner Orthodontics',
    slug: 'aligner-orthodontics',
    icon: 'Smile',
    shortDescription: 'The discreet way to achieve the straight, confident smile you\'ve always wanted.',
    fullDescription: 'Transform your smile without traditional metal braces. Our clear aligner orthodontics uses custom-made, virtually invisible trays to gradually shift your teeth into perfect alignment. Ideal for adults and teens, this comfortable, removable solution fits seamlessly into your lifestyle while delivering stunning results in 6-18 months.',
    benefits: [
      'Virtually invisible - no one will notice',
      'Removable for eating and special occasions',
      'No dietary restrictions like traditional braces',
      'Comfortable with no metal brackets or wires',
      'Fewer office visits required',
      'See your predicted results before starting'
    ],
    priceRange: '$1,500 - $3,500',
    priceStarting: '$28/month with 0% finance',
    duration: '6-18 months',
    recovery: 'Immediate - minor adjustment period for first few days',
    howItWorks: [
      'Digital scan and 3D smile preview',
      'Custom aligners created just for you',
      'Wear aligners 22 hours per day',
      'Switch to new aligners every 1-2 weeks',
      'Remote monitoring with virtual checkups',
      'Reveal your new smile with a retainer to maintain results'
    ]
  },
  {
    id: '3',
    name: 'Composite Bonding',
    slug: 'composite-bonding',
    icon: 'Sparkles',
    shortDescription: 'Instantly restore your confidence by fixing chips, gaps, and small imperfections.',
    fullDescription: 'Composite bonding is a minimally invasive cosmetic treatment that can dramatically improve your smile in just one visit. Using tooth-colored resin, we can repair chips, close gaps, reshape teeth, and cover discoloration. This affordable alternative to veneers requires little to no tooth preparation and delivers beautiful, natural-looking results.',
    benefits: [
      'Same-day smile transformation',
      'No tooth removal or anesthesia needed',
      'Natural-looking, customized color matching',
      'Long-lasting results with proper care',
      'Affordable alternative to veneers',
      'Pain-free and minimally invasive'
    ],
    priceRange: '$150 - $400 per tooth',
    priceStarting: '$150',
    duration: '30-60 minutes per tooth',
    recovery: 'None - immediate results',
    howItWorks: [
      'Consultation and color matching',
      'Tooth surface is gently prepared',
      'Composite resin is expertly applied and shaped',
      'Material is hardened with specialized light',
      'Final polishing for a natural finish',
      'Enjoy your renewed smile immediately'
    ]
  },
  {
    id: '4',
    name: 'Teeth Whitening',
    slug: 'teeth-whitening',
    icon: 'Sun',
    shortDescription: 'Safe, professional brightening for a radiant smile you\'ll want to show off.',
    fullDescription: 'Achieve a dazzling white smile with our professional teeth whitening treatments. Whether you choose our in-office power whitening for immediate results or our boutique take-home system for gradual brightening, you will see a noticeable difference of several shades. Safe, effective, and tailored to your sensitivity level, our whitening solutions deliver the confidence-boosting results you deserve.',
    benefits: [
      'Up to 8 shades whiter',
      'Safe professional-grade formulas',
      'Customized for your sensitivity level',
      'Take-home trays for maintenance',
      'Long-lasting results with proper care',
      '14-day satisfaction guarantee'
    ],
    priceRange: '$299 - $495',
    priceStarting: '$299',
    duration: 'In-office: 60-90 minutes | At-home: 2-3 weeks',
    recovery: 'None - possible minor sensitivity for 24-48 hours',
    howItWorks: [
      'Consultation and shade assessment',
      'Custom whitening trays created (for at-home)',
      'Professional-grade whitening gel applied',
      'LED light activation (for in-office treatment)',
      'Multiple applications for optimal results',
      'Maintenance plan and aftercare guidance'
    ]
  },
  {
    id: '5',
    name: 'Dental Implants',
    slug: 'dental-implants',
    icon: 'Shield',
    shortDescription: 'A permanent, natural-feeling foundation for a complete, functional smile.',
    fullDescription: 'Dental implants are the gold standard for replacing missing teeth. Unlike dentures or bridges, implants are surgically placed titanium posts that fuse with your jawbone, providing a stable foundation for realistic-looking crowns. The result is a permanent, natural-feeling tooth replacement that restores full function and prevents bone loss. Invest in your smile with a solution designed to last a lifetime.',
    benefits: [
      'Permanent, lifetime solution',
      'Looks and feels like natural teeth',
      'Prevents jawbone deterioration',
      'No impact on adjacent teeth',
      'Eat and speak with confidence',
      'Highest success rate of any tooth replacement'
    ],
    priceRange: '$2,000 - $3,000 per tooth',
    priceStarting: '$2,000',
    duration: '3-6 months (including healing time)',
    recovery: '1-2 weeks for initial healing, 3-6 months for full integration',
    howItWorks: [
      'Comprehensive evaluation and 3D imaging',
      'Implant post surgically placed in jawbone',
      'Healing period for osseointegration (3-6 months)',
      'Abutment and custom crown attachment',
      'Final adjustments for perfect fit and appearance',
      'Enjoy your permanent new tooth'
    ]
  },
  {
    id: '6',
    name: 'Crowns & Veneers',
    slug: 'crowns-veneers',
    icon: 'Award',
    shortDescription: 'Custom porcelain artistry to create your version of a flawless, natural smile.',
    fullDescription: 'Crowns and veneers are premium cosmetic solutions that deliver transformative results. Dental crowns fully restore damaged or weakened teeth, while veneers are ultra-thin porcelain shells that cover the front surface of teeth to correct shape, color, and alignment issues. Both options are custom-crafted to match your natural teeth, providing a beautiful, durable result that enhances your entire smile.',
    benefits: [
      'Dramatic smile transformation',
      'Natural appearance with custom shading',
      'Stain-resistant porcelain material',
      'Strengthens and protects teeth',
      'Long-lasting with proper care (10-15+ years)',
      'Same-day crowns available with CEREC technology'
    ],
    priceRange: '$500 - $1,200 per tooth',
    priceStarting: '$500',
    duration: '2 visits (or same-day with CEREC)',
    recovery: 'Minimal - may experience slight sensitivity',
    howItWorks: [
      'Consultation and smile design planning',
      'Tooth preparation and digital impression',
      'Custom porcelain fabrication in our lab',
      'Temporary restoration while permanent is made',
      'Final crown or veneer bonding and adjustment',
      'Reveal your stunning new smile'
    ]
  },
  {
    id: '7',
    name: 'Dentures & Bridges',
    slug: 'dentures-bridges',
    icon: 'Link',
    shortDescription: 'Comfortable, natural-looking solutions to chew and speak with total confidence.',
    fullDescription: 'When multiple teeth are missing, dentures and bridges offer effective, affordable solutions to restore your smile and function. Modern dentures are lightweight, comfortable, and incredibly natural-looking, while dental bridges permanently fill gaps by anchoring to adjacent teeth. Whether you need a partial or full restoration, we will create a custom solution that fits comfortably and looks beautiful.',
    benefits: [
      'Restore eating and speaking ability',
      'Natural-looking modern materials',
      'Affordable tooth replacement option',
      'Prevent remaining teeth from shifting',
      'Boost confidence and self-esteem',
      'Custom fit for maximum comfort'
    ],
    priceRange: '$800 - $2,500',
    priceStarting: '$800',
    duration: '3-5 weeks (multiple visits)',
    recovery: '1-2 weeks adjustment period',
    howItWorks: [
      'Comprehensive oral examination',
      'Impressions and measurements taken',
      'Try-in appointment to verify fit and appearance',
      'Custom denture or bridge fabrication',
      'Final fitting and adjustments',
      'Follow-up care and maintenance guidance'
    ]
  },
  {
    id: '8',
    name: 'Facial Aesthetics',
    slug: 'facial-aesthetics',
    icon: 'Heart',
    shortDescription: 'Subtle enhancements to complement your smile and refresh your natural look.',
    fullDescription: 'Complement your beautiful smile with our facial aesthetics services. Administered by trained dental professionals, our anti-wrinkle injections and dermal fillers can smooth lines, restore volume, and enhance your natural features. From subtle lip enhancement to smoothing crow\'s feet and frown lines, we offer a range of non-surgical treatments in a comfortable, clinical setting to help you look as confident as you feel.',
    benefits: [
      'Reduce fine lines and wrinkles',
      'Restore facial volume and contour',
      'Enhance lip shape and fullness',
      'Non-surgical with minimal downtime',
      'Natural-looking, subtle results',
      'Administered by trained dental professionals'
    ],
    priceRange: '$150 - $400 per area',
    priceStarting: '$150',
    duration: '30-45 minutes',
    recovery: 'Minimal - possible mild swelling or bruising for 2-3 days',
    howItWorks: [
      'Personalized consultation and assessment',
      'Treatment plan tailored to your goals',
      'Topical numbing cream applied for comfort',
      'Precise injections administered',
      'Immediate results visible (full effects in 2-14 days)',
      'Follow-up appointment to assess results'
    ]
  }
];

export const getTreatmentBySlug = (slug: string): Treatment | undefined => {
  return treatments.find(treatment => treatment.slug === slug);
};
