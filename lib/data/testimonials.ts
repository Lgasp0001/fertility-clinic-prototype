export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  text: string;
  image?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    treatment: 'IVF Treatment',
    rating: 5,
    text: 'After years of trying, we finally found hope at Frosts Fertility. The team provided the emotional and clinical support we needed. Our IVF journey was handled with such care, and we are now expecting our first child this fall. We cannot thank them enough!',
  },
  {
    id: '2',
    name: 'James Richardson',
    treatment: 'Fertility Consultations',
    rating: 5,
    text: 'The diagnostic clarity we received at Frosts was life-changing. We had so many questions, and the specialists took the time to explain everything clearly. We finally feel like we have a roadmap for our future.',
  },
  {
    id: '3',
    name: 'Emily Chen',
    treatment: 'Egg Freezing',
    rating: 5,
    text: 'Choosing to freeze my eggs was a big decision, but the boutique environment at Frosts made me feel completely at ease. The process was explained well, and the care I received during the retrieval was exceptional. I feel empowered about my future!',
  },
  {
    id: '4',
    name: 'Michael Torres',
    treatment: 'Genetic Screening',
    rating: 5,
    text: 'The advanced genetic screening options at Frosts gave us incredible peace of mind. The team was thorough and compassionate throughout the entire process. High-tech meets high-touch care.',
  },
  {
    id: '5',
    name: 'Rachel Anderson',
    treatment: 'IVF Treatment',
    rating: 5,
    text: 'We moved our care to Frosts after a cold experience elsewhere. The difference was night and day. The boutique setting and personalized approach made all the difference in our successful IVF cycle.',
  },
  {
    id: '6',
    name: 'David Park',
    treatment: 'Male Fertility Support',
    rating: 5,
    text: 'I was hesitant about seeking fertility support, but the team at Frosts was professional and discreet. They provided clear answers and actionable steps. Highly recommend for any couple starting their journey.',
  },
  {
    id: '7',
    name: 'Lisa Thompson',
    treatment: 'Holistic Support',
    rating: 5,
    text: 'I love that Frosts offers more than just clinical care. Their focus on acupuncture and stress management during my fertility journey was exactly what I needed. Truly a boutique experience.',
  },
  {
    id: '8',
    name: 'Robert Hughes',
    treatment: 'Donor Programs',
    rating: 5,
    text: 'The guidance we received while exploring donor options was incredibly sensitive and helpful. They helped us navigate a complex process with grace and expertise.',
  },
  {
    id: '12',
    name: 'Christopher Lee',
    treatment: 'Egg Freezing',
    rating: 5,
    text: 'As a professional with a busy schedule, the efficiency and boutique level of service at Frosts was perfect. Every appointment was on time, and the staff was always supportive.',
  },
  {
    id: '13',
    name: 'Amanda Brown',
    treatment: 'Fertility Consultations',
    rating: 5,
    text: 'Best decision we made. We finally got the personalized attention our case deserved. The specialists at Frosts are absolute world-class.',
  }
];

export const getTestimonialsByTreatment = (treatment: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.treatment === treatment);
};
