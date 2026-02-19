'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileStickyCTAProps {
  onBookingClick: () => void;
}

export default function MobileStickyCTA({ onBookingClick }: MobileStickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t border-rose/10 shadow-[0_-10px_40px_rgba(93,62,99,0.1)]">
      <div className="grid grid-cols-2 gap-3 p-4 pb-8">
        <a
          href="tel:5125550198"
          className="flex items-center justify-center space-x-2 bg-berry text-white h-14 rounded-2xl font-bold shadow-lg shadow-berry/20 active:scale-95 transition-all w-full"
        >
          <Phone className="w-5 h-5 text-rose" />
          <span>Call Now</span>
        </a>
        <Button
          onClick={onBookingClick}
          className="bg-rose hover:bg-rose-600 text-white h-14 rounded-2xl font-bold shadow-lg shadow-rose/20 active:scale-95 transition-all w-full border-none"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
