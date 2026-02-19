'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import MobileStickyCTA from '@/components/layout/MobileStickyCTA';
import BookingModal from '@/components/modals/BookingModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ContactPage() {
  const router = useRouter();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactFAQs = [
    {
      question: 'What are your clinic hours?',
      answer:
        'We are open Monday to Friday from 8:00 AM to 7:00 PM, and Saturdays from 9:00 AM to 4:00 PM. We are closed on Sundays. We offer flexible appointment times to fit your schedule.',
    },
    {
      question: 'Do you offer fertility financing?',
      answer:
        'Yes, we provide several flexible financing options for our pathways, including preservation and IVF packages. Our care coordinators can help you find a plan that works for you.',
    },
    {
      question: 'How quickly can I get an initial consultation?',
      answer:
        'We typically have availability for initial private consultations within 48 to 72 hours. Please contact us or use our online booking tool to check specific times.',
    },
    {
      question: 'Is my information kept confidential?',
      answer:
        'Absolutely. Privacy and discretion are at the heart of our boutique approach. All your data and conversations are strictly confidential and protected by the highest medical standards.',
    },
  ];

  return (
    <>
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-hero-gradient py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-2xl text-gray-200">
                Have questions? We&apos;re here to help. Reach out to our friendly
                team today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-berry mb-6 tracking-tight">
                  Visit Our Clinic
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-rose flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-berry mb-1">Address</h3>
                      <p className="text-gray-600">
                        2847 Willow Creek Drive
                        <br />
                        Austin, TX 78701
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-rose flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-berry mb-1">Phone</h3>
                      <a
                        href="tel:5125550198"
                        className="text-berry hover:text-rose transition-colors"
                      >
                        (512) 555-0198
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-rose flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-berry mb-1">Email</h3>
                      <a
                        href="mailto:hello@frostsfertility.com"
                        className="text-berry hover:text-rose transition-colors"
                      >
                        hello@frostsfertility.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-rose flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-berry mb-1">
                        Clinic Hours
                      </h3>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Notice */}
                <Card className="bg-rose/5 border-rose/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-berry mb-2">
                      Need Immediate Care?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We prioritize urgent consultations. Call us before 10 AM for
                      priority scheduling.
                    </p>
                    <a
                      href="tel:5125550198"
                      className="inline-flex items-center space-x-2 font-semibold text-berry hover:text-rose transition-colors"
                    >
                      <Phone className="w-5 h-5 text-rose" />
                      <span>(512) 555-0198</span>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {!isSubmitted ? (
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold text-berry mb-6">
                        Send Us a Message
                      </h2>

                      {(() => {
                        const isEmailValid = formData.email.includes('@');
                        const isFormValid = formData.name.trim() !== '' && isEmailValid && formData.phone.trim() !== '' && formData.message.trim() !== '';

                        return (
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
                                  setFormData({
                                    ...formData,
                                    email: e.target.value,
                                  })
                                }
                                placeholder="john@example.com"
                                className={`mt-1 transition-colors ${!isEmailValid && formData.email !== ''
                                  ? 'border-red-500 focus-visible:ring-red-500'
                                  : ''
                                  }`}
                              />
                              {!isEmailValid && formData.email !== '' && (
                                <p className="text-red-500 text-xs mt-1">Please include an &apos;@&apos; in the email address.</p>
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
                                  setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                  })
                                }
                                placeholder="(512) 555-0123"
                                className="mt-1"
                              />
                            </div>

                            <div>
                              <Label htmlFor="message">Message</Label>
                              <Textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    message: e.target.value,
                                  })
                                }
                                placeholder="How can we help you?"
                                rows={5}
                                className="mt-1"
                              />
                            </div>

                            <Button
                              type="submit"
                              className={`w-full py-6 text-lg transition-all duration-300 font-bold ${isFormValid
                                ? 'bg-rose hover:bg-rose-600 text-white shadow-lg shadow-rose/20 scale-[1.02]'
                                : 'bg-rose/40 cursor-not-allowed text-white/90'
                                }`}
                            >
                              Send Message
                            </Button>

                            <p className="text-xs text-gray-500 text-center">
                              We&apos;ll get back to you within 2 business hours.
                            </p>
                          </form>
                        );
                      })()}
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </div>

                      <h2 className="text-3xl font-bold text-berry mb-4">
                        Message Sent Successfully!
                      </h2>

                      <p className="text-gray-600 mb-6">
                        Thank you for contacting us, {formData.name}. Our team
                        will review your message and get back to you within 2
                        business hours.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="outline"
                        >
                          Send Another Message
                        </Button>
                        <Button onClick={() => router.push('/')}>
                          Return Home
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-berry mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Quick answers to common questions about visiting our practice.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {contactFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:text-rose transition-colors">
                    <span className="font-semibold text-berry">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-berry">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your free consultation and discover how we can help you
                achieve your dreams of parenthood.
              </p>
              <Button
                onClick={() => setIsBookingModalOpen(true)}
                size="lg"
                className="bg-rose hover:bg-rose-600 text-white border-none shadow-xl shadow-rose/20"
              >
                Book My Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <MobileStickyCTA onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
