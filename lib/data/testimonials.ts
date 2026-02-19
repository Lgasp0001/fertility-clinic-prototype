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
    treatment: 'Aligner Orthodontics',
    rating: 5,
    text: 'After years of being self-conscious about my crooked teeth, I finally took the leap with Frosts Dental. The clear aligners were so comfortable and discreet - no one even noticed I was wearing them! My smile is now completely transformed and I can\'t stop showing it off. Worth every penny!',
  },
  {
    id: '2',
    name: 'James Richardson',
    treatment: 'Dental Implants',
    rating: 5,
    text: 'I was nervous about getting implants, but the team at Frosts made the entire process painless and straightforward. The result is incredible - my new tooth looks and feels completely natural. I can eat anything I want again. Highly recommend!',
  },
  {
    id: '3',
    name: 'Emily Chen',
    treatment: 'Teeth Whitening',
    rating: 5,
    text: 'Best decision ever! My teeth were stained from years of coffee drinking, and I was amazed at how much whiter they became after just one treatment. The team was professional, the process was comfortable, and the results speak for themselves. I smile so much more now!',
  },
  {
    id: '4',
    name: 'Michael Torres',
    treatment: 'Composite Bonding',
    rating: 5,
    text: 'I chipped my front tooth and was devastated. Frosts Dental fixed it the same day with composite bonding and you literally cannot tell which tooth it was. The color match is perfect and the whole procedure was pain-free. I\'m beyond grateful!',
  },
  {
    id: '5',
    name: 'Rachel Anderson',
    treatment: 'Crowns & Veneers',
    rating: 5,
    text: 'My smile makeover with veneers has completely changed my life. I used to hide my teeth in photos, but now I can\'t stop smiling. The porcelain looks so natural and the team at Frosts were absolute perfectionists. Thank you for giving me my confidence back!',
  },
  {
    id: '6',
    name: 'David Park',
    treatment: 'Routine Dentistry',
    rating: 5,
    text: 'I hadn\'t been to a dentist in years because of anxiety, but Frosts Dental made me feel so comfortable. The staff is incredibly patient and understanding, and the pain-free numbing technology is a game-changer. I actually look forward to my checkups now!',
  },
  {
    id: '7',
    name: 'Lisa Thompson',
    treatment: 'Facial Aesthetics',
    rating: 5,
    text: 'I came in for teeth whitening and learned about their facial aesthetics services. The results from my lip filler treatment are so natural and subtle - exactly what I wanted. Having everything done in one place by professionals I trust is amazing!',
  },
  {
    id: '8',
    name: 'Robert Hughes',
    treatment: 'Dentures & Bridges',
    rating: 5,
    text: 'After losing several teeth, I thought I\'d never smile comfortably again. My new partial denture from Frosts fits perfectly and looks completely natural. I can eat all my favorite foods again and the confidence boost is priceless!',
  },
  {
    id: '9',
    name: 'Jessica Martinez',
    treatment: 'Aligner Orthodontics',
    rating: 5,
    text: 'As an adult professional, I didn\'t want traditional braces. The clear aligners were perfect - invisible, removable, and worked faster than I expected. My teeth are straight and beautiful now. The whole experience was seamless!',
  },
  {
    id: '10',
    name: 'Andrew Wilson',
    treatment: 'Composite Bonding',
    rating: 5,
    text: 'I had gaps between my teeth that made me super self-conscious. Composite bonding closed them in one appointment and the results look completely natural. No one can tell I\'ve had work done. Incredible value for money!',
  },
  {
    id: '11',
    name: 'Maria Garcia',
    treatment: 'Teeth Whitening',
    rating: 5,
    text: 'The at-home whitening kit from Frosts gave me professional results in just two weeks. My teeth are several shades whiter and the custom trays fit perfectly. So much better than drugstore products - and the results last!',
  },
  {
    id: '12',
    name: 'Christopher Lee',
    treatment: 'Dental Implants',
    rating: 5,
    text: 'Getting dental implants was the best investment in myself. The procedure was far less painful than I expected, and the final result is phenomenal. My implant looks identical to my natural teeth. Can\'t recommend Frosts Dental enough!',
  },
  {
    id: '13',
    name: 'Amanda Brown',
    treatment: 'Routine Dentistry',
    rating: 5,
    text: 'The team caught a cavity early during my routine checkup - I had no idea it was there! They filled it same-day and I felt nothing. Their preventive care approach and attention to detail are outstanding. My family and I are patients for life!',
  },
  {
    id: '14',
    name: 'Daniel Scott',
    treatment: 'Crowns & Veneers',
    rating: 5,
    text: 'I needed crowns on two back teeth and veneers on the front. The CEREC same-day technology meant I walked out with a complete smile in one visit. The convenience and quality are unmatched. Frosts Dental is next-level!',
  },
  {
    id: '15',
    name: 'Sophie Turner',
    treatment: 'Facial Aesthetics',
    rating: 5,
    text: 'The anti-wrinkle treatment smoothed my forehead lines beautifully without looking overdone. The injector was so skilled and knowledgeable. I look refreshed and natural - exactly what I hoped for. Will definitely be back!',
  },
  {
    id: '16',
    name: 'Kevin Johnson',
    treatment: 'Aligner Orthodontics',
    rating: 5,
    text: 'I finished my aligner treatment in just 10 months and my teeth look amazing! The remote monitoring was super convenient - fewer office visits but still felt fully supported. So glad I chose Frosts for my smile transformation!',
  },
  {
    id: '17',
    name: 'Nicole Davis',
    treatment: 'Composite Bonding',
    rating: 5,
    text: 'My teeth were discolored and oddly shaped, which made me so insecure. Composite bonding gave me a complete smile makeover in just two hours. The results are stunning and so natural-looking. I finally love my smile!',
  },
  {
    id: '18',
    name: 'Brandon White',
    treatment: 'Teeth Whitening',
    rating: 5,
    text: 'The in-office power whitening gave me immediate results - my teeth were 6 shades whiter in 90 minutes! Perfect for my wedding photos. Zero sensitivity too. Frosts Dental delivered exactly what they promised!',
  },
  {
    id: '19',
    name: 'Olivia Harris',
    treatment: 'Dentures & Bridges',
    rating: 5,
    text: 'My dental bridge looks and feels so natural that I forget it\'s not my original teeth. The color match is perfect and it\'s completely comfortable. The team took such care to get everything just right. Excellent experience!',
  },
  {
    id: '20',
    name: 'Matthew Clark',
    treatment: 'Routine Dentistry',
    rating: 5,
    text: 'The deep cleaning and fluoride treatment here are thorough yet gentle. My gums have never been healthier and my teeth feel amazing. The hygienist is so skilled and the office is spotless. Best dental practice I\'ve ever been to!',
  }
];

export const getTestimonialsByTreatment = (treatment: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.treatment === treatment);
};
