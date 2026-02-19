'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push('/' + href);
      }
    }
  };

  return (
    <footer className="bg-berry pt-24 pb-32 md:pb-24 relative overflow-hidden text-white">
      {/* Urgency Banner */}
      <div className="bg-champagne text-berry py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold">
            Compassionate Consultations - Limited New Patient Slots Available
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex flex-col items-center group mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all shadow-lg ring-4 ring-rose/5 mb-3">
                <Heart className="w-7 h-7 text-rose" />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold leading-none uppercase tracking-tight">Frosts</span>
                <span className="text-sm font-medium text-rose uppercase tracking-widest mt-1">Fertility Clinic</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Modern care. Compassionate precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-rose rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-rose rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('#treatments')}
                  className="text-gray-300 hover:text-rose transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#testimonials')}
                  className="text-gray-300 hover:text-rose transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#faqs')}
                  className="text-gray-300 hover:text-rose transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-rose transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  2847 Willow Creek Drive
                  <br />
                  Austin, TX 78701
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose flex-shrink-0" />
                <a
                  href="tel:5125550198"
                  className="text-gray-300 hover:text-rose transition-colors"
                >
                  (512) 555-0198
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose flex-shrink-0" />
                <a
                  href="mailto:hello@frostsfertility.com"
                  className="text-gray-300 hover:text-rose transition-colors"
                >
                  hello@frostsfertility.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm text-gray-400">
              <p>Mon-Fri: 8:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Frosts Fertility Clinic. Compassionate Reproductive Care. Serving the Austin community for over 20 years.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
              <span>NPI: 9876543210</span>
              <span className="hidden md:inline">|</span>
              <span>Member of ASRM</span>
              <span className="hidden md:inline">|</span>
              <span>Texas Fertility Society</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
