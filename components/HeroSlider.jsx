'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const slides = [
  { 
    id: 1, 
    image: '/uploads/hero1.jpg', 
    title: 'Création de sites web modernes',
    subtitle: 'Des solutions web sur mesure pour votre entreprise'
  },
  { 
    id: 2, 
    image: '/uploads/hero2.jpg', 
    title: 'Designs uniques et impactants',
    subtitle: 'Une identité visuelle qui vous démarque'
  },
  { 
    id: 3, 
    image: '/uploads/hero3.jpg', 
    title: 'Solutions web sur mesure',
    subtitle: 'Des fonctionnalités adaptées à vos besoins'
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <div className={`text-center max-w-4xl ${isAnimating ? 'animate-fade-in' : ''}`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Encart des services inclus */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-xl border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Tous les services incluent :</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-accent-yellow" />
              <span className="text-white">Design premium 3 pages</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-accent-yellow" />
              <span className="text-white">Hébergement</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-accent-yellow" />
              <span className="text-white">Logo professionnel inclus</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-accent-yellow" />
              <span className="text-white">Formulaire de contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Boutons CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center gap-4">
        <Link href="/contact">
          <button className="btn btn-primary group">
            Démarrer un projet
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        <Link href="/realisations">
          <button className="btn btn-secondary group">
            Voir mes réalisations
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>

      {/* Indicateurs de slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent-yellow w-8' : 'bg-white/50'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 