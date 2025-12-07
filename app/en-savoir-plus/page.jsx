'use client';

import { useEffect, useState } from 'react';
import { Wrench, Code, Coffee, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EnSavoirPlus() {
  const [dots, setDots] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(dotsInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-light-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent-yellow">
            En Construction
          </h1>
          <p className="text-xl text-accent-yellow/80">
            Nous travaillons actuellement sur cette page{dots}
          </p>
        </div>

        {/* Barre de progression */}
        <div className="w-full h-2 bg-accent-yellow/20 rounded-full mb-12 overflow-hidden">
          <div 
            className="h-full bg-accent-yellow transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center group hover-lift">
            <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Wrench className="w-8 h-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-accent-yellow">En Développement</h3>
            <p className="text-accent-yellow/70">
              Notre équipe travaille dur pour créer une expérience unique
            </p>
          </div>

          <div className="card p-6 text-center group hover-lift">
            <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-accent-yellow">Technologies Modernes</h3>
            <p className="text-accent-yellow/70">
              Utilisation des dernières technologies web
            </p>
          </div>

          <div className="card p-6 text-center group hover-lift">
            <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Coffee className="w-8 h-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-accent-yellow">Bientôt Disponible</h3>
            <p className="text-accent-yellow/70">
              Revenez bientôt pour découvrir notre nouveau contenu
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-4 bg-accent-yellow/5 rounded-lg">
            <p className="text-accent-yellow/80">
              Temps estimé de développement : <span className="font-bold text-accent-yellow">2 semaines</span>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block">
            <button className="btn btn-primary group">
              Retour à l'accueil
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 