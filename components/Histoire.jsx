'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Histoire() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="grid-container">
        <div className="col-span-12 text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Notre Histoire
          </h2>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mb-8" />
          <p className="text-xl text-[#FDB912] font-medium max-w-3xl mx-auto">
            Avec plus de 14 années d'expérience dans le domaine de l'informatique cloud, en passant par l'analyse SOC – Antony explore aujourd'hui un nouveau terrain de jeu : la création de sites web.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 relative">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/uploads/story.jpg"
              alt="Notre histoire"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Notre Passion</h3>
              <p className="text-xl text-white/90">Créer des expériences web uniques</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col justify-center p-8 md:p-12">
          <div className="space-y-8 text-lg text-black/90">
            <div className="card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-black">Notre Début</h3>
              <p>
                Depuis plus de 10 ans, nous créons des sites web qui allient esthétique et performance. 
                Notre approche unique combine design moderne et expérience utilisateur optimale.
              </p>
            </div>

            <div className="card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-black">Notre Mission</h3>
              <p>
                Chaque projet est une nouvelle aventure, une opportunité de repousser les limites 
                de la créativité tout en répondant aux besoins spécifiques de nos clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card p-6 hover-lift bg-accent-yellow/5">
                <h4 className="text-xl font-bold mb-2 text-black">Expertise</h4>
                <p className="text-black/80">Plus de 100 projets réalisés avec succès</p>
              </div>
              <div className="card p-6 hover-lift bg-accent-yellow/5">
                <h4 className="text-xl font-bold mb-2 text-black">Innovation</h4>
                <p className="text-black/80">Technologies de pointe et solutions créatives</p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="mt-8 inline-block">
            <button className="btn btn-primary group">
              Démarrer votre projet
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>

      {/* Section parallax */}
      <div className="parallax mt-20">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/uploads/hero2.jpg"
            alt="Notre vision"
            fill
            className="parallax-bg"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Notre Vision
              </h3>
              <p className="text-xl text-white/90">
                Créer des expériences web qui transforment votre présence en ligne en un atout majeur pour votre entreprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 