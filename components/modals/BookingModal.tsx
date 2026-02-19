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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {!isSubmitted ? (
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-navy mb-2">
                Book Your Smile Consultation
              </h2>
              <p className="text-gray-600">
                Take the first step towards your dream smile
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className={!isEmailValid && formData.email !== '' ? 'text-red-500' : ''}>
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
                  placeholder="john@example.com"
                  className={`mt-1 transition-colors ${!isEmailValid && formData.email !== ''
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                    }`}
                />
                {!isEmailValid && formData.email !== '' && (
                  <p className="text-red-500 text-xs mt-1">Please include an '@' in the email address.</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="(512) 555-0123"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="treatment">Treatment of Interest</Label>
                <Select
                  value={formData.treatment}
                  onValueChange={(value) =>
                    setFormData({ ...formData, treatment: value })
                  }
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a treatment" />
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
                className={`w-full py-6 text-lg transition-all duration-300 font-bold ${isFormValid
                  ? 'bg-teal hover:bg-teal-600 text-white shadow-lg shadow-teal/20 scale-[1.02]'
                  : 'bg-teal/40 cursor-not-allowed text-white/90'
                  }`}
              >
                Book My Consultation
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy. We'll
                contact you within 2 business hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-navy mb-4">
              You're One Step Closer to Your New Smile!
            </h2>

            <p className="text-gray-600 mb-4">
              Thank you, {formData.name}! Our Smile Coordinator, Sarah, will
              reach out via your preferred method within 2 business hours to
              finalize your consultation time.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-teal-900 font-medium">
                While you wait, check your email for our "Frosts New Patient
                Guide" which explains our pain-free technology and 0% finance
                options in detail.
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6">
              We can't wait to meet you!
            </p>

            <Button
              onClick={handleClose}
              className="bg-navy hover:bg-navy-700 text-white"
            >
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
