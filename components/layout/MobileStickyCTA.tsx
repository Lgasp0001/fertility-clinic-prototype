'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileStickyCTAProps {
  onBookingClick: () => void;
}

export default function MobileStickyCTA({ onBookingClick }: MobileStickyCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-2 gap-3 p-4">
        <a
          href="tel:5125550198"
          className="flex items-center justify-center space-x-2 bg-navy text-white h-14 rounded-xl font-bold shadow-lg shadow-navy/20 active:scale-95 transition-all w-full"
        >
          <Phone className="w-5 h-5 text-teal" />
          <span>Call Now</span>
        </a>
        <Button
          onClick={onBookingClick}
          className="bg-teal hover:bg-teal-600 text-white h-14 rounded-xl font-bold shadow-lg shadow-teal/20 active:scale-95 transition-all w-full"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
