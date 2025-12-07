'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/histoire', label: 'En savoir plus' },
    { href: '/realisations', label: 'Réalisations' },
    { href: 'https://antonyaudic.terrenordique.com/', label: 'Portfolio', external: true },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`sticky-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center hover-lift">
            <img 
              src="/uploads/logo-tn.png" 
              alt="Logo Terre Nordique" 
              style={{ height: 250 }} 
              className="w-auto drop-shadow-[0_0_15px_rgba(253,185,18,0.5)]" 
            />
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-white hover:text-accent-yellow transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden absolute top-20 left-0 right-0 bg-custom-grey/95 backdrop-blur-md transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="nav-link py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 