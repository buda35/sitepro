import { Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from './AnimatedBackground';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative text-white py-12 overflow-hidden">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/uploads/islande.jpg"
          alt="Paysage islandais"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-custom-grey/90" />
      </div>

      {/* Fond animé */}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 bg-black/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent-yellow" />
              <a href="mailto:budaberg35@gmail.com" className="hover:text-accent-yellow transition-colors">
                budaberg35@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent-yellow" />
              <span>Chartres de Bretagne, France</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent-yellow transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-accent-yellow transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent-yellow transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/realisations" className="hover:text-accent-yellow transition-colors">
                  Sites Web
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-accent-yellow transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-accent-yellow transition-colors">
                  Applications Web
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-accent-yellow transition-colors">
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-yellow transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-yellow transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-yellow transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/antony-audic-b51a9a80/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-accent-yellow transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-4">
            <p>&copy; {new Date().getFullYear()} Terrenordique.com Tous droits réservés.</p>
            <Image
              src="/uploads/logo-tn.png"
              alt="Logo Terre Nordique"
              width={60}
              height={60}
              className="w-auto h-12"
            />
          </div>
        </div>
      </div>
    </footer>
  );
} 