import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import VoiceflowChat from '@/components/VoiceflowChat';

export const metadata: Metadata = {
  metadataBase: new URL('https://frosts-dental.com'), // Replace with actual domain when live
  title: 'Frosts Dental Practice | Premium Boutique Dentistry in Austin, TX',
  description:
    'Escape the clinical cold. Experience world-class artistry and gentle precision in our South Congress studio. Invisalign, Whitening & Implants. 0% finance available.',
  keywords: [
    'Austin Dentist',
    'Boutique Dentistry',
    'South Congress Dental',
    'Invisalign Austin',
    'Cosmetic Dentist Austin',
    'Teeth Whitening Austin',
    'Dental Implants',
    'Emergency Dentist Austin',
  ],
  openGraph: {
    title: 'Frosts Dental Practice | Premium Boutique Dentistry',
    description:
      'Experience dental care redefined. World-class artistry meeting medical precision in Austin, TX.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Frosts Dental Practice',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Frosts Dental Practice - Premium Boutique Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frosts Dental Practice | Boutique Austin Dentistry',
    description: 'Transform your smile with premium care in South Congress. 0% finance available.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <VoiceflowChat />
      </body>
    </html>
  );
}
