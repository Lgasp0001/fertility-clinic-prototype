'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Castle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Magnetic from '@/components/ui/Magnetic';

interface HeaderProps {
  onBookingClick: () => void;
}

export default function Header({ onBookingClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '/contact' },
  ];

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-center group relative -bottom-1">
              <Magnetic>
                <div className={`w-10 h-10 bg-navy rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all shadow-lg ring-4 ${isScrolled ? 'ring-teal/5' : 'ring-white/10'}`}>
                  <Castle className="w-6 h-6 text-teal" />
                </div>
              </Magnetic>
              <div className="flex flex-col items-center">
                <span className="text-[12px] font-black uppercase tracking-tight text-black">Frosts</span>
                <span className="text-[8px] font-bold text-teal uppercase tracking-[0.2em]">Dental Practice</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="transition-all duration-300 font-bold text-sm tracking-widest uppercase text-black hover:text-teal"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="transition-all duration-300 font-bold text-sm tracking-widest uppercase text-black hover:text-teal"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Button
                onClick={onBookingClick}
                className="bg-white hover:bg-navy hover:text-white text-teal border-2 border-navy px-6 py-5 rounded-xl font-bold shadow-sm transition-all"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 transition-all duration-300 text-black"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-20">
          <div className="flex flex-col space-y-6 p-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-2xl font-medium text-navy hover:text-teal transition-colors w-full text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-navy hover:text-teal transition-colors block"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-gray-200 space-y-4">
              <a
                href="tel:5125550198"
                className="flex items-center space-x-2 text-navy hover:text-teal transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium text-lg">(512) 555-0198</span>
              </a>
              <Button
                onClick={() => {
                  onBookingClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-teal hover:bg-teal-600 text-white"
                size="lg"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
