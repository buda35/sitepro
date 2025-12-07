import { Inter } from 'next/font/google';
import './globals.css';
import CookieConsent from '../components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Terre Nordique - Création de Sites Web Modernes',
  description: 'Création de sites web modernes et impactants pour votre entreprise',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
} 