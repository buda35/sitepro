'use client';

import { useEffect, useState } from 'react';
import { Wrench, Code, Coffee, ArrowRight, Clock, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HistoirePage() {
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
    <div className="min-h-screen bg-light-white relative">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/uploads/story.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            En savoir plus
          </h1>
          <p className="text-xl text-black font-medium max-w-3xl mx-auto">
            Avec plus de 14 années d'expérience dans le domaine de l'informatique cloud, en passant par l'analyse SOC – Antony explore aujourd'hui un nouveau terrain de jeu : la création de sites web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card p-6 text-center group hover-lift">
            <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Wrench className="w-8 h-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">En Développement</h3>
            <p className="text-black/70">
              Notre équipe travaille dur pour créer une expérience unique
            </p>
          </div>

          <div className="card p-6 text-center group hover-lift">
            <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-8 h-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Technologies Modernes</h3>
            <p className="text-black/70">
              Utilisation des dernières technologies web
              <br />
              Next.js
            </p>
          </div>

          <div className="card p-6 text-center group hover-lift">
            <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Coffee className="w-8 h-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">Collaboration</h3>
            <p className="text-black/70">
              De l'entretien préalable aux conceptions et modifications personnalisées, chaque étape devient une opportunité pour vous de participer activement
            </p>
          </div>
        </div>

        {/* Chronologie */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-black text-center">Étapes de la création de votre site</h2>
          
          <div className="space-y-12">
            {/* Étape 1 */}
            <div className="relative pl-8 border-l-2 border-accent-yellow">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent-yellow rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Déterminer vos besoins et vos objectifs</h3>
              <div className="card p-6 bg-white/80">
                <h4 className="text-xl font-bold mb-2 text-accent-yellow">Entretien préalable</h4>
                <p className="text-black/80 mb-4">
                  Cette étape est cruciale : lors de cet entretien, nous allons lister les fonctionnalités et les pages nécessaires pour atteindre vos objectifs.
                </p>
                <Link href="/entretien-prealable">
                  <button className="btn btn-primary group">
                    Demander un entretien préalable
                    <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="relative pl-8 border-l-2 border-accent-yellow">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent-yellow rounded-full flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Définir le coût du projet</h3>
              <div className="card p-6 bg-white/80">
                <h4 className="text-xl font-bold mb-2 text-accent-yellow">Devis</h4>
                <p className="text-black/80">
                  Suite à l'entretien préalable, j'établis un devis chiffré de la réalisation du site et des potentiels coûts annexes (licences pour ajouter des fonctionnalités ou des services nécessaires).
                </p>
                <p className="text-black/80 mt-4">
                  Le devis signé est accompagné d'un acompte de 20 % du prix total du devis, pour permettre la rédaction du cahier des charges et du contrat, bases de notre collaboration.
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="relative pl-8 border-l-2 border-accent-yellow">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent-yellow rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Formaliser et contractualiser</h3>
              <div className="card p-6 bg-white/80">
                <h4 className="text-xl font-bold mb-2 text-accent-yellow">Contrat, cahier des charges et calendrier de facturation</h4>
                <p className="text-black/80">
                  Le contrat délimitera les devoirs et responsabilités de chacun.
                </p>
                <p className="text-black/80 mt-4">
                  Le cahier des charges synthétise nos échanges et cadre la prestation (pages, fonctionnalités, etc).
                </p>
                <p className="text-black/80 mt-4">
                  Le calendrier de facturation permet d'établir les échéances de paiements si des mensualités sont nécessaires.
                </p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="relative pl-8 border-l-2 border-accent-yellow">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent-yellow rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Construire votre site, ensemble</h3>
              <div className="card p-6 bg-white/80">
                <h4 className="text-xl font-bold mb-2 text-accent-yellow">Création du site</h4>
                <p className="text-black/80">
                  Cette phase est collaborative.
                </p>
                <p className="text-black/80 mt-4">
                  Vous devrez me fournir le contenu du site, car vous êtes expert de votre projet. Textes, photos et images devront être choisis.
                </p>
                <p className="text-black/80 mt-4">
                  Je mets en œuvre pages et fonctionnalités, auxquelles vous aurez accès à n'importe quel moment de la création du site.
                </p>
                <p className="text-black/80 mt-4 font-bold">
                  Une phase de tests (10 jours) et d'ajustements pour passer à l'étape suivante !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
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