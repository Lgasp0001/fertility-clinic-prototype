'use client';

import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { treatments } from '@/lib/data/treatments';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultTreatment,
}: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: defaultTreatment || '',
  });

  if (!isOpen) return null;

  const isEmailValid = formData.email.includes('@');
  const isFormValid = formData.name.trim() !== '' && isEmailValid && formData.phone.trim() !== '' && formData.treatment !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', treatment: defaultTreatment || '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-berry/40 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300 border border-white/20">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-rose/10 rounded-full transition-colors group"
        >
          <X className="w-5 h-5 text-gray-400 group-hover:text-rose" />
        </button>

        {!isSubmitted ? (
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-berry mb-2">
                Book Your Private Consultation
              </h2>
              <p className="text-gray-600">
                Start your journey to building your dream family
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-berry/70">Full Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="mt-1 border-gray-200 focus:border-rose focus:ring-rose/20"
                />
              </div>

              <div>
                <Label htmlFor="email" className={!isEmailValid && formData.email !== '' ? 'text-red-500' : 'text-berry/70'}>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@example.com"
                  className={`mt-1 transition-colors border-gray-200 focus:border-rose focus:ring-rose/20 ${!isEmailValid && formData.email !== ''
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                    }`}
                />
                {!isEmailValid && formData.email !== '' && (
                  <p className="text-red-500 text-xs mt-1">Please include a valid email address.</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-berry/70">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="(512) 555-0123"
                  className="mt-1 border-gray-200 focus:border-rose focus:ring-rose/20"
                />
              </div>

              <div>
                <Label htmlFor="treatment" className="text-berry/70">Service of Interest</Label>
                <Select
                  value={formData.treatment}
                  onValueChange={(value) =>
                    setFormData({ ...formData, treatment: value })
                  }
                >
                  <SelectTrigger className="mt-1 border-gray-200 focus:border-rose focus:ring-rose/20">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {treatments.map((treatment) => (
                      <SelectItem key={treatment.id} value={treatment.slug}>
                        {treatment.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className={`w-full py-6 text-lg rounded-xl transition-all duration-300 font-bold ${isFormValid
                  ? 'bg-rose hover:bg-rose-600 text-white shadow-lg shadow-rose/20 scale-[1.01]'
                  : 'bg-rose/40 cursor-not-allowed text-white/90'
                  }`}
              >
                Book My Consultation
              </Button>

              <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
                By submitting, you agree to our Privacy Policy. We respect your confidentiality and will
                contact you within 2 business hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-10 text-center">
            <div className="w-20 h-20 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-rose" />
            </div>

            <h2 className="text-3xl font-bold text-berry mb-4">
              Your Journey Begins Now
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you, {formData.name}. Our Care Coordinator, Sarah, will
              reach out discreetly within 2 business hours to
              finalize your private consultation time.
            </p>

            <div className="bg-rose/5 border border-rose/10 rounded-2xl p-5 mb-8">
              <p className="text-sm text-berry/80 font-medium">
                While you wait, check your email for our &ldquo;Path to Parenthood
                Guide&rdquo; which explains our boutique approach and advance fertility
                financing in detail.
              </p>
            </div>

            <p className="text-berry font-semibold mb-8 italic">
              We look forward to supporting you.
            </p>

            <Button
              onClick={handleClose}
              className="bg-berry hover:bg-berry-700 text-white px-10 py-5 rounded-xl font-bold transition-all shadow-lg"
            >
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
